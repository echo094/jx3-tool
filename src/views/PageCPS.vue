<template>
  <div class="box-card" ref="triggerBox"
    tabindex="0" @keyup="onKey" @click="onClick">
    <el-card shadow="always">
      <h1>CPS测试</h1>
      <el-row>
        <el-col :span="7" :offset="1">
          <el-card shadow="always">
            <div class="meter-title">触发方式</div>
            <div class="meter-value">{{triggerName}}</div>
          </el-card>
        </el-col>
      </el-row>
      <el-row style="margin: 50px 0px;">
        <el-col :span="7" :offset="1">
          <el-card shadow="always">
            <div class="meter-title">近1秒CPS</div>
            <div class="meter-value">{{countOneSec}}</div>
          </el-card>
        </el-col>
        <el-col :span="14" :offset="1">
          <el-progress style="margin-top:15px;"
            :stroke-width="26"
            :percentage="perOneSec"
            :color="colorOneSec"
            :show-text="false">
          </el-progress>
        </el-col>
      </el-row>
      <el-row style="margin: 50px 0px;">
        <el-col :span="7" :offset="1">
          <el-card shadow="always">
            <div class="meter-title">全程CPS</div>
            <div class="meter-value">{{cpsAlltime}}</div>
          </el-card>
        </el-col>
        <el-col :span="14" :offset="1">
          <el-progress style="margin-top:15px;"
            :stroke-width="26"
            :percentage="perAlltime"
            :color="colorAlltime"
            :show-text="false">
          </el-progress>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="20" :offset="2">
          <p>{{ guideText }}</p>
          <el-button @click="onCmd">{{ btnText }}</el-button>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'PageCPS',
  data () {
    return {
      isStart: false,
      countLatest: 0,
      countOneSec: 0,
      countAlltime: 0,
      cpsOneSec: 0,
      cpsAlltime: 0,
      cache: [],
      timeStart: null,
      timerid: null,
      triggerMethod: null,
      triggerName: ''
    }
  },
  mounted () {
  },
  computed: {
    btnText () {
      if (this.isStart) {
        return '停止'
      }
      return '开始'
    },
    guideText () {
      if (!this.isStart) {
        return '点击开始按钮开始测试'
      }
      if (!this.timerid) {
        return '使用鼠标或任意常规按键触发测试'
      }
      return '点击停止按钮结束测试'
    },
    perOneSec () {
      const val = Number.parseFloat(this.cpsOneSec)
      return Math.min(Math.log2(val + 1) / 7, 1) * 100
    },
    colorOneSec () {
      const i2s = (val) => {
        val = val.toString(16)
        if (val.length === 1) {
          return '0' + val
        }
        return val
      }
      if (this.perOneSec <= 40) {
        const val = Math.floor(124 + this.perOneSec / 40 * 120)
        return `#${i2s(val)}f440`
      } else {
        const val = Math.floor(244 - (this.perOneSec - 40) / 60 * 180)
        return `#f4${i2s(val)}40`
      }
    },
    perAlltime () {
      const val = Number.parseFloat(this.cpsAlltime)
      return Math.min(Math.log2(val + 1) / 7, 1) * 100
    },
    colorAlltime () {
      const i2s = (val) => {
        val = val.toString(16)
        if (val.length === 1) {
          return '0' + val
        }
        return val
      }
      if (this.perAlltime <= 40) {
        const val = Math.floor(124 + this.perAlltime / 40 * 120)
        return `#${i2s(val)}f440`
      } else {
        const val = Math.floor(244 - (this.perAlltime - 40) / 60 * 180)
        return `#f4${i2s(val)}40`
      }
    }
  },
  methods: {
    onCmd (evt) {
      if (this.isStart) {
        clearInterval(this.timerid)
        this.timerid = null
      } else {
        this.countLatest = 0
        this.countOneSec = 0
        this.countAlltime = 0
        this.cpsOneSec = 0
        this.cpsAlltime = 0
        this.cache.length = 0
        this.timeStart = null
        this.triggerMethod = null
        this.triggerName = ''
        this.$refs.triggerBox.focus()
        evt.stopPropagation()
      }
      this.isStart = !this.isStart
    },
    onKey (evt) {
      if (!this.isStart) {
        return
      }
      if (!this.triggerMethod) {
        this.triggerMethod = evt.keyCode
        this.triggerName = `Keyboard: ${evt.code}`
        this.onStart()
      }
      if (this.triggerMethod === evt.keyCode) {
        this.onTrigger()
      }
    },
    onClick (evt) {
      if (!this.isStart) {
        return
      }
      if (!this.triggerMethod) {
        this.triggerMethod = evt.type
        this.triggerName = `Mouse: ${evt.type}`
        this.onStart()
      }
      if (this.triggerMethod === evt.type) {
        this.onTrigger()
      }
    },
    onStart () {
      this.timeStart = new Date().getTime()
      this.cache.push({
        c: 0,
        t: this.timeStart
      })
      this.countLatest++
      this.timerid = setInterval(() => {
        this.onTimer()
      }, 100)
    },
    onTrigger () {
      this.countLatest++
    },
    onTimer () {
      const curTime = new Date().getTime()
      this.countOneSec += this.countLatest
      this.countAlltime += this.countLatest
      this.cache.push({
        c: this.countLatest,
        t: curTime
      })
      this.countLatest = 0
      if (this.cache.length > 11) {
        this.cache = this.cache.slice(1)
        this.countOneSec -= this.cache[0].c
      }
      const valOneSec = this.countOneSec / (curTime - this.cache[0].t) * 1000
      const valAlltime = this.countAlltime / (curTime - this.timeStart) * 1000
      this.cpsOneSec = valOneSec.toFixed(2)
      this.cpsAlltime = valAlltime.toFixed(2)
      if (this.cpsOneSec < 0) {
        console.log(valOneSec, this.cache)
      }
    }
  }
}
</script>

<style scoped>
.box-card {
  margin-top: 20px;
}

.box-card:focus {
  outline-color: violet;
}

.area-content {
  margin: 0% 5%;
  height: 200px;
}

.meter-title {
  text-align: left;
  float: left;
  margin-bottom: 15px;
}

.meter-value {
  text-align: right;
  float: right;
  margin-bottom: 15px;
}
</style>
