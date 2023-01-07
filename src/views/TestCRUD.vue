<template>
  <div class="content">
    <el-image src="http://121.5.231.228:8888/img/songListPic/1560017681028a32415ca9a21f6f9a1d99b2731f224b5d319c424.jpg" />
    <el-table highlight-current-row :data="dataList" @row-click="handleClick">
      <el-table-column prop="songName" label="歌曲" />
      <el-table-column prop="singerName" label="歌手" />
      <el-table-column prop="introduction" label="专辑" />
      <el-table-column label="编辑" width="80" align="center">
        <template #title="scope">
          <el-button @click="edit(scope.row)" type="text" size="small">更新</el-button>
          <el-button @click="edit(scope.row)" type="text" size="small">删除</el-button>
<!--          <el-dropdown>-->
<!--            <el-icon @click="handleEdit(scope.row)"><MoreFilled /></el-icon>-->
<!--            <template #dropdown>-->
<!--              <el-dropdown-menu>-->
<!--                <el-dropdown-item-->
<!--                    :icon="Download"-->
<!--                    @click="-->
<!--                    downloadMusic({-->
<!--                      songUrl: scope.row.url,-->
<!--                      songName: scope.row.name,-->
<!--                    })-->
<!--                  "-->
<!--                >下载</el-dropdown-item-->
<!--                >-->
<!--                <el-dropdown-item :icon="Delete" v-if="show" @click="deleteCollection({ id: scope.row.id })">删除</el-dropdown-item>-->
<!--              </el-dropdown-menu>-->
<!--            </template>-->
<!--          </el-dropdown>-->
        </template>
      </el-table-column>
    </el-table>
    <el-button @click="edit(scope.row)" type="text" size="small">更新</el-button>
    <el-button @click="edit(scope.row)" type="text" size="small">删除</el-button>
  </div>
</template>

<script>
import {defineComponent, ref} from "vue";
export default defineComponent({
  setup(){
    const dataList=ref([
      {
        songName: "龙卷风",
        singerName: "周杰伦",
        introduction: "爱在西元前",
      }
    ])

    return{
      dataList
    }
  }
})
</script>


<style lang="scss" scoped>
@import "@/assets/css/var.scss";
@import "@/assets/css/global.scss";

.content {
  background-color: $color-white;
  border-radius: $border-radius-songlist;
  padding: 10px;
}

.content:deep(.el-table__row.current-row) {
  color: $color-black;
  font-weight: bold;
}

.content:deep(.el-table__row) {
  cursor: pointer;
}

.icon {
  @include icon(1.2em, $color-black);
}
</style>