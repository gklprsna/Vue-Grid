<template>
    <section>

        <div id="demo" style="margin:10px;">

            <demogrid :data="gridData" :totalPageCount="totalPageCount" :globalFilterString="globalSearchString" :columnsDetail="gridColumnsDetail">
            </demogrid>

        </div>
    </section>
</template>

<script>
import demogrid from "./GridComponent";
import { gridEvent } from "../main";
var mockData = [
  {
    Company: "CAT",
    OrganizationType: "Construction",
    FirstName: "Gokul",
    LastName: "Sethuraman",
    Email: "gokul@cat.com",
    PrimaryPhone: "9600640652",
    SecondaryPhone: "123456"
  },
  {
    Company: "CAT",
    OrganizationType: "Construction",
    FirstName: "Mohan",
    LastName: "Raj",
    Email: "gokul@cat.com",
    PrimaryPhone: "9600640652",
    SecondaryPhone: "123456"
  },
  {
    Company: "CAT",
    OrganizationType: "Construction",
    FirstName: "Anujan",
    LastName: "Sakthi",
    Email: "gokul@cat.com",
    PrimaryPhone: "9600640652",
    SecondaryPhone: "123456"
  },
  {
    Company: "CAT",
    OrganizationType: "Construction",
    FirstName: "Gokul",
    LastName: "Sethuraman",
    Email: "gokul@cat.com",
    PrimaryPhone: "9600640652",
    SecondaryPhone: "123456"
  },
  {
    Company: "CAT",
    OrganizationType: "Construction",
    FirstName: "Mohan",
    LastName: "Raj",
    Email: "gokul@cat.com",
    PrimaryPhone: "9600640652",
    SecondaryPhone: "123456"
  },
  {
    Company: "CAT",
    OrganizationType: "Construction",
    FirstName: "Anujan",
    LastName: "Sakthi",
    Email: "gokul@cat.com",
    PrimaryPhone: "9600640652",
    SecondaryPhone: "123456"
  },
  {
    Company: "CAT",
    OrganizationType: "Construction",
    FirstName: "Gokul",
    LastName: "Sethuraman",
    Email: "gokul@cat.com",
    PrimaryPhone: "9600640652",
    SecondaryPhone: "123456"
  },
  {
    Company: "CAT",
    OrganizationType: "Construction",
    FirstName: "Mohan",
    LastName: "Raj",
    Email: "gokul@cat.com",
    PrimaryPhone: "9600640652",
    SecondaryPhone: "123456"
  },
  {
    Company: "CAT",
    OrganizationType: "Construction",
    FirstName: "Anujan",
    LastName: "Sakthi",
    Email: "gokul@cat.com",
    PrimaryPhone: "9600640652",
    SecondaryPhone: "123456"
  },
  {
    Company: "CAT",
    OrganizationType: "Construction",
    FirstName: "Gokul",
    LastName: "Sethuraman",
    Email: "gokul@cat.com",
    PrimaryPhone: "9600640652",
    SecondaryPhone: "123456"
  },
  {
    Company: "CAT",
    OrganizationType: "Construction",
    FirstName: "Mohan",
    LastName: "Raj",
    Email: "gokul@cat.com",
    PrimaryPhone: "9600640652",
    SecondaryPhone: "123456"
  },
  {
    Company: "CAT",
    OrganizationType: "Construction",
    FirstName: "Anujan",
    LastName: "Sakthi",
    Email: "gokul@cat.com",
    PrimaryPhone: "9600640652",
    SecondaryPhone: "123456"
  },
  {
    Company: "CAT",
    OrganizationType: "Construction",
    FirstName: "Gokul",
    LastName: "Sethuraman",
    Email: "gokul@cat.com",
    PrimaryPhone: "9600640652",
    SecondaryPhone: "123456"
  },
  {
    Company: "CAT",
    OrganizationType: "Construction",
    FirstName: "Mohan",
    LastName: "Raj",
    Email: "gokul@cat.com",
    PrimaryPhone: "9600640652",
    SecondaryPhone: "123456"
  },
  {
    Company: "CAT",
    OrganizationType: "Construction",
    FirstName: "Anujan",
    LastName: "Sakthi",
    Email: "gokul@cat.com",
    PrimaryPhone: "9600640652",
    SecondaryPhone: "123456"
  },
  {
    Company: "CAT",
    OrganizationType: "Construction",
    FirstName: "Gokul",
    LastName: "Sethuraman",
    Email: "gokul@cat.com",
    PrimaryPhone: "9600640652",
    SecondaryPhone: "123456"
  },
  {
    Company: "CAT",
    OrganizationType: "Construction",
    FirstName: "Mohan",
    LastName: "Raj",
    Email: "gokul@cat.com",
    PrimaryPhone: "9600640652",
    SecondaryPhone: "123456"
  },
  {
    Company: "CAT",
    OrganizationType: "Construction",
    FirstName: "Anujan",
    LastName: "Sakthi",
    Email: "gokul@cat.com",
    PrimaryPhone: "9600640652",
    SecondaryPhone: "123456"
  }
];

var length =
  mockData.length % 5 == 0
    ? (mockData.length / 5) >> 0
    : ((mockData.length / 5) >> 0) + 1;

// console.log((mockData.length % 5 == 0));
// console.log((mockData.length / 5)>>0 );
// console.log((mockData.length /5  >> 0 )+1);

export default {
  components: { demogrid: demogrid },
  data() {
    return {
      globalSearchString: "",
      gridData: mockData.slice(0, 5),
      gridColumnsDetail: [
        {
          name: "Company",
          displayName: "Company",
          filter: { enable: true, filterString: "" },
          placeholder: "Enter Company"
        },
        {
          name: "OrganizationType",
          displayName: "Organization Type",
          filter: { enable: true, filterString: "" },
          placeholder: "Enter Organization Type"
        },
        {
          name: "FirstName",
          displayName: "First Name",
          filter: { enable: true, filterString: "" },
          placeholder: "Enter First Name"
        },
        {
          name: "LastName",
          displayName: "Last Name",
          filter: { enable: true, filterString: "" },
          placeholder: "Enter Last Name"
        },
        {
          name: "Email",
          displayName: "Email",
          filter: { enable: false, filterString: "" },
          placeholder: "Enter Email"
        },
        {
          name: "PrimaryPhone",
          displayName: "Primary Phone",
          filter: { enable: false, filterString: "" },
          placeholder: "Enter Primary Phone"
        },
        {
          name: "SecondaryPhone",
          displayName: "Secondary Phone",
          filter: { enable: false, filterString: "" },
          placeholder: "Enter Secondary Phone"
        }
      ],

      //   dataModel : {
      //       globalFilterString: '',
      //       columnFilterString:[],
      //       sortColumn:'',
      //       sortOrder: 1,
      //       pageNum:1,
      //       rowsCount:5,

      //   },

      totalPageCount: length
    };
  },

  created() {
    gridEvent.$on("modelChanged", data => {
      //console.log("Updated dataModel " + JSON.stringify(data));
      this.alterData(data);
    });
  },

  methods: {
    alterData: function(model) {
      var dataModel = model;
      // console.log(dataModel);
      console.log(dataModel.globalFilterString);
      var sortKey = dataModel.sortColumn;
      var filterKey = dataModel.globalFilterString;
      var columnsDetail = dataModel.columnsDetail;
      var order = dataModel.sortOrder;
      var data = mockData;
      if (filterKey) {
        data = data.filter(function(row) {
          return Object.keys(row).some(function(key) {
            return (
              String(row[key])
                .toLowerCase()
                .indexOf(filterKey) > -1
            );
          });
        });
      }
      if (sortKey) {
        data = data.slice().sort(function(a, b) {
          a = a[sortKey];
          b = b[sortKey];
          return (a === b ? 0 : a > b ? 1 : -1) * order;
        });
      }
      if (data.length > 0) {
        if (columnsDetail) {
          // console.log(data)
          var searchData = data;
          columnsDetail.forEach(ele => {
            var value = ele.filter.filterString.toLowerCase();
            if (value != "") {
              var filterData = [];
              searchData.forEach(item => {
                //console.log(item[ele.name].toLowerCase());
                if (item[ele.name].toLowerCase().includes(value)) {
                  filterData.push(item);
                }
              });

              //console.log("Row filter data " + filterData);
              //searchData = Array.from(new Set(filterData));
              searchData = filterData;
            }
          });
          //console.log("filter data " + searchData);
          //withoutDuplicates = Array.from(new Set(filterData));
          //console.log("Without Duplicates "+withoutDuplicates);
          //if(withoutDuplicates.length>0)
          data = searchData;
          //this.dataCopy = searchData;
        }

        if (dataModel.pageNum) {
          var rows =  dataModel.rowsCount;
          var start = (dataModel.pageNum - 1) * rows;
          var end = start + rows;
          var pageCount = data.length % rows == 0 ? (data.length / rows) >> 0 : ((data.length / rows) >> 0) + 1;
          this.totalPageCount = pageCount;
          data = data.slice(start, end);
          console.log(data);
        }
      }

      this.gridData = data;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
