<template>
  <h1>test</h1>
  getAllPaperMessage
  <div>
    <el-table
            :data="allPlayList"
            border
            style="width: 60%">
      <el-table-column
          fixed
          prop="id"
          label="编号"
          width="150">
      </el-table-column>

      <el-table-column
          fixed
          prop="singerId"
          label="编号"
          width="150">
      </el-table-column>

      <el-table-column
          fixed
          prop="comments"
          label="编号"
          width="150">
      </el-table-column>

      <el-table-column
          fixed
          prop="createdTime"
          label="编号"
          width="150">
      </el-table-column>

      <el-table-column
          fixed
          prop="updateTime"
          label="编号"
          width="150">
      </el-table-column>

      <el-table-column
          fixed
          prop="pic"
          label="编号"
          width="150">
      </el-table-column>

    </el-table>
  </div>
</template>

<script lang="ts">
import {HttpManager} from "@/api";
import {computed, defineComponent, ref} from "vue";

export default defineComponent({
  components: {

  },


  setup() {
  const allPlayList = ref([]); // 歌单

  // 获取全部歌单
  async function getSongList() {
    allPlayList.value = ((await HttpManager.getAllPaperMessage()) as ResponseBody).data;
    // (await HttpManager.getAllPaperMessage())
  }


  try {
    getSongList();
  } catch (error) {
    console.error(error);
  }

  return {
    allPlayList,
  };
},
});
</script>

<style scoped>

</style>