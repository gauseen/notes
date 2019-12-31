<template>
  <div>
    <select v-model="currentProvince">
      <option v-for="(label, code) in provinces" :value="code" :key="code">{{code}} - {{label}}</option>
    </select>
    <select v-model="currentCity">
      <option v-for="(label, code) in citys" :value="code" :key="code">{{code}} - {{label}}</option>
    </select>
    <select v-model="currentArea">
      <option v-for="(label, code) in areas" :value="code" :key="code">{{code}} - {{label}}</option>
    </select>
  </div>
</template>

<script>
const defalutCode = 100000

import allData from './data'

export default {
  data () {
    return {
      provinces: {},
      citys: {},
      areas: {},
      currentProvince: '110000',
      currentCity: '110100',
      currentArea: '110101',
    }
  },
  watch: {
    // 省取市数据
    currentProvince (provinceCode) {
      this.citys = this.getObjByCode(provinceCode)
      this.areas = {}
    },
    // 市取区数据
    currentCity (cityCode) {
      this.areas = this.getObjByCode(cityCode)
    },
  },
  created () {
    this.provinces = this.getObjByCode()
    this.citys = this.currentProvince ? this.getObjByCode(this.currentProvince) : []
    this.areas = this.currentCity ? this.getObjByCode(this.currentCity) : []
  },
  methods: {
    getObjByCode (code = defalutCode) {
      return allData[code]
    },
  },
}
</script>
