<template>
  <div>
    <el-card shadow="always" class="box-card">
      <h1>团牌回忆录</h1>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          width="150">
        </el-table-column>
        <el-table-column
          prop="label"
          label="团牌"
          width="100">
        </el-table-column>
        <el-table-column
          prop="server"
          label="区服"
          width="200">
        </el-table-column>
        <el-table-column
          prop="note"
          label="内容">
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import { dataTeamlist as DataTeamlist } from '@/data/dataTeamlist.js'

export default {
  name: 'PageTeamlist',
  data () {
    return {
      tableData: []
    }
  },
  mounted () {
    this.tableData = JSON.parse(JSON.stringify(DataTeamlist))
  }
}
</script>

<style scoped>
  .box-card {
    margin-top: 20px;
  }
</style>
