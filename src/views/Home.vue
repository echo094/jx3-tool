<template>
  <div>
    <h1 style="text-align: center;">Welcome</h1>
    <el-card shadow="always">
      <div style="text-align: center;">
        <strong>系统信息</strong>
      </div>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="name"
          label="属性"
          width="100">
        </el-table-column>
        <el-table-column
          prop="data"
          label="值">
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>

/**
 * 获取DPI
 */
function jsGetDPI () {
  const arrDPI = []
  if (window.screen.deviceXDPI !== undefined) {
    arrDPI[0] = window.screen.deviceXDPI
    arrDPI[1] = window.screen.deviceYDPI
  } else {
    var tmpNode = document.createElement('DIV')
    tmpNode.style.cssText = 'width:1in;height:1in;position:absolute;left:0px;top:0px;z-index:99;visibility:hidden'
    document.body.appendChild(tmpNode)
    arrDPI[0] = parseInt(tmpNode.offsetWidth)
    arrDPI[1] = parseInt(tmpNode.offsetHeight)
    tmpNode.parentNode.removeChild(tmpNode)
  }
  return arrDPI
}

export default {
  name: 'Home',
  data () {
    return {
      activeName: 'first',
      tableData: [
        {
          name: 'Platform',
          data: ''
        }, {
          name: 'Language',
          data: ''
        }, {
          name: 'Screen',
          data: ''
        }, {
          name: 'DPI',
          data: ''
        }, {
          name: 'Name',
          data: ''
        }, {
          name: 'UserAgent',
          data: ''
        }
      ]
    }
  },
  mounted () {
    const dpi = jsGetDPI()
    this.tableData[0].data = navigator.platform
    this.tableData[1].data = navigator.language
    this.tableData[2].data = `(${window.screen.width}, ${window.screen.height}, ${window.devicePixelRatio})`
    this.tableData[3].data = `(${dpi[0]}, ${dpi[1]})`
    this.tableData[4].data = navigator.appName
    this.tableData[5].data = navigator.userAgent
  }
}
</script>
