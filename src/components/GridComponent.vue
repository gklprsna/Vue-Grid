<template>
  <div>
    <form id="search">
      <input name="query" v-model="filterKey" placeholder="Text to Search" v-on:keyup = "GlobalFilter" />
    </form>
    <table>
      <thead>

        <tr>
          <th v-for="key in columnsDetail" @click="sortBy(key.name)" :class="{ active: sortKey == key.name }">
            {{ key.displayName | capitalize }}
            <span class="arrow" :class="sortOrders[key.name] > 0 ? 'asc' : 'dsc'">
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td v-for="column in columnsDetail">
            <input type="text" v-if="column.filter.enable" v-model="column.filter.filterString" :placeholder="column.placeholder" :name="column.name" v-on:keyup = "ColumnFilter"/>
          </td>
        </tr>
        <tr v-for="entry in data">
          <td v-for="key in columnsDetail">
            {{entry[key.name]}}
          </td>
        </tr>
      </tbody>
    </table>

    <paginate :page-count="totalPageCount" :click-handler="clickCallback" :prev-text="'Prev'" :next-text="'Next'" :container-class="'pagination'">
    </paginate>

  </div>
</template>

<script>

import Paginate from 'vuejs-paginate';
import { gridEvent } from '../main';
export default {
  name: 'demogrid',
  components: { 'paginate': Paginate },
  props: {
    data: Array,
    globalFilterString: String,
    columnsDetail: Array,
    //dataModel: Object,
    totalPageCount: Number

  },
  data: function() {
    var sortOrders = {}
    this.columnsDetail.forEach(function(key) {
      sortOrders[key.name] = 1
    })
    return {
      sortKey: '',
      sortOrders: sortOrders,
      dataCopy : this.data,
      filterKey : this.globalFilterString,
      isServerSide: true,
      filterData : false,
      paginateData :false,
      dataModel : {
          globalFilterString: '',
          columnFilterString:[],
          columnsDetails:[],
          sortColumn:'',
          sortOrder: 1,
          rowsCount:5,
          pageNum:1
       }
    }
  },
  computed: {

    // filteredData: function() {
    //   console.log("Inside filtered Data")
      
    //   //setTimeout(function(){console.log("Typing Finished" + this.filterKey) }, 3000);
    //   var globalFilterData = this.GetGlobalFilterData;
      
    //   return globalFilterData;
    // },



    // GetGlobalFilterData: function() {

    //   console.log("Inside global filter data");
    //   if (!this.isServerSide) {
    //     // var sortKey = this.sortKey
    //     // var filterKey = this.filterKey && this.filterKey.toLowerCase()
    //     // var columnsDetail = this.columnsDetail
    //     // var order = this.sortOrders[sortKey] || 1
    //     // var data = this.data
    //     // if (filterKey) {
    //     //   data = data.filter(function(row) {
    //     //     return Object.keys(row).some(function(key) {
    //     //       return String(row[key]).toLowerCase().indexOf(filterKey) > -1
    //     //     })
    //     //   })
    //     // }
    //     // if (sortKey) {
    //     //   data = data.slice().sort(function(a, b) {
    //     //     a = a[sortKey]
    //     //     b = b[sortKey]
    //     //     return (a === b ? 0 : a > b ? 1 : -1) * order
    //     //   })
    //     // }
    //     // if (data.length > 0) {

    //     //   if (columnsDetail) {
    //     //     // console.log(data)
    //     //     var searchData = data;
    //     //     columnsDetail.forEach(ele => {
    //     //       var value = ele.filter.filterString.toLowerCase();
    //     //       if (value != "") {
    //     //         var filterData = [];
    //     //         searchData.forEach(item => {
    //     //           //console.log(item[ele.name].toLowerCase());
    //     //           if (item[ele.name].toLowerCase().includes(value)) {
    //     //             filterData.push(item);
    //     //           }
    //     //         })

    //     //         //console.log("Row filter data " + filterData);
    //     //         //searchData = Array.from(new Set(filterData));
    //     //         searchData = filterData;
    //     //       }

    //     //     })
    //     //     //console.log("filter data " + searchData);
    //     //     //withoutDuplicates = Array.from(new Set(filterData));
    //     //     //console.log("Without Duplicates "+withoutDuplicates);
    //     //     //if(withoutDuplicates.length>0)
    //     //     data = searchData;
    //     //     this.dataCopy = searchData;
    //     //   }
    //     // }
    //     // return data
    //   }

    //   else {
    //     var sortKey = this.sortKey
    //     var filterKey = this.filterKey && this.filterKey.toLowerCase()
    //     var columnsDetail = this.columnsDetail
    //     var order = this.sortOrders[sortKey] || 1
    //     var data = this.data
    //     var columnFilterString = [];

    //     columnsDetail.forEach(ele => {
    //       if (ele.filter.filterString !== '') {
    //         var columnData = {
    //           colName: ele.name,
    //           searchString: ele.filter.filterString
    //         }

    //         columnFilterString.push(columnData);

    //       }
    //     });

    //       this.dataModel.columnsDetail = columnsDetail;
    //       this.dataModel.globalFilterString =  filterKey;
    //       this.dataModel.columnFilterString = columnFilterString;
    //       this.dataModel.sortColumn = sortKey;
    //       this.dataModel.sortOrder = order;
    //       this.dataModel.rowsCount = 5;
    //       gridEvent.$emit('modelChanged', {dataModel:this.dataModel, pageNum:1});

    //     //console.log("Data" +this.data);
    //     return data;

    //   }

    // }


  },
  filters: {
    capitalize: function(str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  },
  methods: {
    sortBy: function(key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1;
      this.dataModel.sortOrder = this.sortOrders[key] * -1;
      this.dataModel.sortColumn = key;
      gridEvent.$emit('modelChanged',this.dataModel);
    },

    clickCallback: function(pageNum) {

      console.log('Inside paginate');
      this.dataModel.pageNum = pageNum
      gridEvent.$emit('modelChanged',this.dataModel);
      //var dataModel = this.dataModel;
      //data.pageNum  = pageNum;
      //console.log(pageNum);
      // if(this.isServerSide)
      // {
      //this.dataModel.pageNum = pageNum
      //gridEvent.$emit('modelChanged',this.dataModel);
      //}
      // else
      // {

      //   var start = (pageNum - 1) * dataModel.rowsCount;
      //   var end = start + (dataModel.rowsCount);
      //   var data = this.dataCopy;
      //   data = data.slice(start, end);
      //   console.log(data);
 
      // }

    },

    GlobalFilter : function($event)
    {
       
       var value = $event.target.value.toLowerCase();
       console.log(value);
       this.dataModel.globalFilterString = value;
       gridEvent.$emit('modelChanged',this.dataModel);
    },

    ColumnFilter : function($event)
    {
      
        var value = $event.target.value.toLowerCase();
        this.dataModel.columnsDetail = this.columnsDetail;
        gridEvent.$emit('modelChanged',this.dataModel);
    }


  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: #40a5e9;
  /*color: rgba(255,255,255,0.66); */
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

td {
  background-color: #f9f9f9;
}

th,
td {
  min-width: 120px;
  padding: 10px 20px;
}

th.active {
  color: #fff;
}

th.active .arrow {
  opacity: 1;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
}

header {
  margin: 0;
  font-family: sans-serif;
  background-color: #0e6dac;
  text-align: center;
}

header h1 {
  margin: 0;
}
</style>
