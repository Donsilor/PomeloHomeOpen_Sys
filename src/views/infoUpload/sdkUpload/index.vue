<template>
  <div class="tab-container">
    <el-tabs style='margin-top:15px;' v-model="activeName"  @tab-click="renderOtherTab">
      <el-tab-pane label="WIFI" name="wifi">
      </el-tab-pane>

      <el-tab-pane label="ZigBee" name="zigbee">
      </el-tab-pane>

      <el-tab-pane label="蓝牙" name="bluetooth">
      </el-tab-pane>
    </el-tabs>

    <wifi-sdk-upload v-show="activeName==='wifi'"></wifi-sdk-upload>
    <zigbee-sdk-upload v-if="isZigbeeRender" v-show="activeName==='zigbee'"></zigbee-sdk-upload>
    <bluetooth-sdk-upload v-if="isBluetoothRender" v-show="activeName==='bluetooth'"></bluetooth-sdk-upload>


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
        isZigbeeRender: false, // Zigbee界面是否渲染
        isBluetoothRender: false, // Bluetooth界面是否渲染
      }
    },
    methods: {
      renderOtherTab(tab, event) {
        if (tab.name === 'zigbee') {
          this.isZigbeeRender = true;
        } else if (tab.name === 'bluetooth') {
          this.isBluetoothRender = true;
        }
      }
    }
  }
</script>

<style scoped>
  .tab-container{
    margin: 30px;
  }
</style>
