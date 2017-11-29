<template>
  <div class="tab-container">
    <!--<el-tag type="primary">mounted times ：{{createdTimes}}</el-tag>-->
    <el-tabs style='margin-top:15px;' v-model="activeName">
      <el-tab-pane label="WIFI" name="wifi">
        <wifi-sdk-upload></wifi-sdk-upload>
      </el-tab-pane>

      <el-tab-pane label="ZigBee" name="zigbee">
        <zigbee-sdk-upload></zigbee-sdk-upload>
      </el-tab-pane>

      <el-tab-pane label="蓝牙" name="bluetooth">
        <bluetooth-sdk-upload></bluetooth-sdk-upload>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import wifiSdkUpload from './wifiSdkUpload.vue';
  import zigbeeSdkUpload from './zigbeeSdkUpload.vue';
  import bluetoothSdkUpload from './bluetoothSdkUpload.vue';

  export default {
    name: 'sdkUpload',
    components: { wifiSdkUpload, zigbeeSdkUpload, bluetoothSdkUpload },
    data() {
      return {
        activeName: 'wifi',
//        createdTimes: 0
      }
    },
    methods: {
//      showCreatedTimes() {
//        this.createdTimes = this.createdTimes + 1
//      }
    }
  }
</script>

<style scoped>
  .tab-container{
    margin: 30px;
  }
</style>
