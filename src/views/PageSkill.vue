<template>
  <div>
    <el-card shadow="always" id="card-price" class="box-card">
      <div style="text-align: left;">
        <h3>采集材料价格</h3>
      </div>
      <el-collapse v-model="activeCate">
        <template v-for="cat in dataMaterial" :key="cat.idx">
          <el-collapse-item
            :title="cat.name"
            :name="cat.idx">
            <template v-for="item in cat.items" :key="item.uid">
              <el-card class="card-item"
                shadow="never"
                style="width:160px;float:left;">
                <div :style="{ color: item.color }"
                  style="font-weight: bold;">{{item.name}}
                </div>
                <el-input size="mini"
                  placeholder="请输入价格"
                  v-model="item.price">
                  <template #append>金</template>
                </el-input>
              </el-card>
            </template>
          </el-collapse-item>
        </template>
      </el-collapse>
      <el-row style="margin-top:20px;">
        <el-button @click="updatePriceSell">应用</el-button>
      </el-row>
    </el-card>
    <el-card shadow="always" id="card-shop" class="box-card">
      <div style="text-align: left;">
        <h3>商店材料价格</h3>
      </div>
      <el-collapse v-model="activeCate">
        <template v-for="cat in dataShop" :key="cat.idx">
          <el-collapse-item
            :title="cat.name"
            :name="cat.idx">
            <template v-for="item in cat.items" :key="item.uid">
              <el-card class="card-item"
                shadow="never"
                style="width:160px;float:left;">
                <div :style="{ color: item.color }"
                  style="font-weight: bold;">{{item.name}}
                </div>
                <el-input size="mini"
                  :disabled="true"
                  v-model="item.price">
                  <template #append>金</template>
                </el-input>
              </el-card>
            </template>
          </el-collapse-item>
        </template>
      </el-collapse>
    </el-card>
    <el-card shadow="always" id="card-skill" class="box-card">
      <div style="text-align: left;">
        <h3>成本计算</h3>
      </div>
      <el-table :data="dataSkill" border>
        <el-table-column type="expand">
          <template #default="props">
            <el-form label-position="left" inline>
              <el-form-item label="材料明细">
                <span>{{ props.row.extra }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column
          prop="cate"
          label="类别"
          :filters="filterCate"
          :filter-method="filterExact"
          width="120">
        </el-table-column>
        <el-table-column prop="name" label="名称" min-width="150" align="left" >
        </el-table-column>
        <el-table-column prop="eng" label="精力" min-width="60">
        </el-table-column>
        <el-table-column prop="out" label="平均产出" min-width="80">
        </el-table-column>
        <el-table-column prop="cost" label="成本" min-width="80">
        </el-table-column>
      </el-table>
    </el-card>
    <el-card shadow="always" id="card-backup" class="box-card">
      <div style="text-align: left;">
        <h3>备份与恢复</h3>
        <el-input
          type="textarea"
          :autosize="{ minRows: 5, maxRows: 20}"
          placeholder="请填写备份数据"
          v-model="textBackup">
        </el-input>
      </div>
      <el-row style="margin-top:20px;">
        <el-button @click="backup">导出</el-button>
        <el-button @click="restore">导入</el-button>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import { dataSkill as DataJX3 } from '@/data/dataSkill.js'

export default {
  name: 'PageSkill',
  data () {
    const dataCate = DataJX3.category
    const dataItem = DataJX3.item
    const cate2id = {}
    const ct = [0, 0]
    const activeCate = [] // 默认展开采集产物分类
    const catMaterial = [] // 采集产物分类
    const catShop = [] // 商店物品分类
    const dataSkill = [] // 制造产物信息
    const filterCate = [] // 制造产物过滤器
    // 处理分类
    for (const k in dataCate) {
      if (k[0] === '1') {
        catMaterial.push({
          idx: k,
          name: dataCate[k].name,
          items: []
        })
        cate2id[k] = ct[0]++
        activeCate.push(k)
      }
      if (k[0] === '2') {
        catShop.push({
          idx: k,
          name: dataCate[k].name,
          items: []
        })
        cate2id[k] = ct[1]++
      }
      if (k[0] === '3' || k[0] === '4') {
        filterCate.push({
          text: dataCate[k].name,
          value: dataCate[k].name
        })
      }
    }
    // 辅助函数
    const getExtraInfo = (obj) => {
      const out = []
      for (let i = 0; i < obj.length; i++) {
        out.push(`${dataItem[obj[i][0]].name}X${obj[i][1]}`)
      }
      return out.join(',')
    }
    const getColor = (q) => {
      switch (q) {
        case 1: {
          return 'rgb(167, 167, 167)'
        }
        case 2: {
          return 'rgb(0, 0, 0)'
        }
        case 3: {
          return 'rgb(0, 210, 75)'
        }
        case 4: {
          return 'rgb(0, 126, 255)'
        }
        case 5: {
          return 'rgb(254, 45, 254)'
        }
        default: {
          return 'rgb(0, 0, 0)'
        }
      }
    }
    // 处理物品 制品的价格先不更新
    const price = {}
    for (const k in dataItem) {
      const pid = dataItem[k].cate
      if (pid[0] === '1') {
        price[k] = 0.0
        const obj = {
          uid: k,
          name: dataItem[k].name,
          price: price[k],
          color: getColor(dataItem[k].quality)
        }
        catMaterial[cate2id[pid]].items.push(obj)
      }
      if (pid[0] === '2') {
        price[k] = dataItem[k].price
        const obj = {
          uid: k,
          name: dataItem[k].name,
          price: price[k],
          color: getColor(dataItem[k].quality)
        }
        catShop[cate2id[pid]].items.push(obj)
      }
      if (pid[0] === '3' || pid[0] === '4') {
        price[k] = 0
        const obj = {
          cate: dataCate[pid].name,
          name: dataItem[k].name,
          eng: dataItem[k].eng,
          out: dataItem[k].out,
          cost: 0,
          extra: getExtraInfo(dataItem[k].reqs),
          uid: k,
          pid: pid,
          reqs: dataItem[k].reqs
        }
        dataSkill.push(obj)
      }
    }
    return {
      textBackup: '',
      activeCate: activeCate,
      dataMaterial: catMaterial,
      dataShop: catShop,
      filterCate: filterCate,
      dataSkill: dataSkill,
      dataPrice: price
    }
  },
  mounted () {
    const old = window.localStorage.getItem('jx3price')
    if (old) {
      // 本地保存了价格数据
      this.parseBackup(old)
    } else {
      // 保存初始数据并计算价格
      window.localStorage.setItem('jx3price', this.genBackup())
      this.updatePriceProduce()
    }
  },
  methods: {
    backup () {
      this.textBackup = this.genBackup()
      this.$message('请备份文本框内的数据')
    },
    restore () {
      if (!this.parseBackup(this.textBackup)) {
        // 恢复成功则更新 localStorage
        window.localStorage.setItem('jx3price', this.textBackup)
      }
    },
    checkFormat (obj) {
      if (!('ver' in obj)) {
        obj = {
          ver: 2,
          price: obj
        }
      }
      if (obj.ver === 2) {
        console.log('The backup is update to date.')
      }
      return obj
    },
    genBackup () {
      // 只备份采集材料的价格数据
      const price = {}
      for (const k in this.dataPrice) {
        const pid = DataJX3.item[k].cate
        if (pid[0] !== '1') {
          continue
        }
        price[k] = this.dataPrice[k]
      }
      const out = {
        ver: 2,
        price: price
      }
      return window.btoa(JSON.stringify(out))
    },
    parseBackup (str) {
      try {
        // 导入价格数据
        const obj = this.checkFormat(JSON.parse(window.atob(str)))
        const newData = obj.price
        for (const k in newData) {
          this.dataPrice[k] = newData[k]
        }
        // 更新视图数据
        for (let i = 0; i < this.dataMaterial.length; i++) {
          const obj = this.dataMaterial[i].items
          for (let j = 0; j < obj.length; j++) {
            const newPrice = Number.parseFloat(obj[j].price)
            if (this.dataPrice[obj[j].uid] !== newPrice) {
              obj[j].price = this.dataPrice[obj[j].uid]
            }
          }
        }
        // 更新产物的价格
        this.updatePriceProduce()
        this.$message('数据已恢复')
        return 0
      } catch (e) {
        this.$message.error('数据异常：' + e.message)
        return -1
      }
    },
    updatePriceSell () {
      const changes = []
      for (let i = 0; i < this.dataMaterial.length; i++) {
        const obj = this.dataMaterial[i].items
        for (let j = 0; j < obj.length; j++) {
          const newPrice = Number.parseFloat(obj[j].price)
          if (this.dataPrice[obj[j].uid] !== newPrice) {
            this.dataPrice[obj[j].uid] = newPrice
            changes.push(obj[j].name)
          }
        }
      }
      if (changes.length) {
        this.updatePriceProduce()
        this.$message(`更新了 ${changes} 的价格`)
        // 更新 localStorage
        window.localStorage.setItem('jx3price', this.genBackup())
        // 清空备份恢复文本框中的内容
        this.textBackup = ''
      } else {
        this.$message('价格无变动')
      }
    },
    updatePriceProduce () {
      // 辅助函数
      const fun = (filter) => {
        for (let i = 0; i < this.dataSkill.length; i++) {
          const obj = this.dataSkill[i]
          if (obj.pid[0] !== filter) {
            continue
          }
          let val = 0
          for (let j = 0; j < obj.reqs.length; j++) {
            const uid = obj.reqs[j][0]
            const ct = obj.reqs[j][1]
            val += this.dataPrice[uid] * ct
          }
          val /= obj.out
          obj.cost = val.toFixed(2)
          this.dataPrice[obj.uid] = val
        }
      }
      // 先计算半成品的价格
      fun('3')
      // 再计算成品的价格
      fun('4')
    },
    filterExact (value, row) {
      return value === row.cate
    }
  }
}
</script>

<style>
  #card-price .el-input input {
    text-align: right;
  }
  #card-shop .el-input input {
    text-align: right;
  }
</style>

<style scoped>
  .box-card {
    margin-top: 20px;
  }
  .card-item {
    margin-right: 10px;
    margin-bottom: 10px;
  }
</style>
