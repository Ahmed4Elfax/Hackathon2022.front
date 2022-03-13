<template>
    <div class="contianer">
        <span style="color:white">From</span>
        <datetime format="YYYY/MM/DD h:i:s" width="300px" v-model="val"></datetime>
        <br>
        <span style="color:white">To</span>
        <datetime format="YYYY/MM/DD h:i:s" width="300px" v-model="val2"></datetime>
        <br>
        <input
            class="check"
            type="checkbox"
            v-model="toggle"
            :true-value="true"
            :false-value="false" />  <span style="color:white"> need a ride from uber</span>
         <br>
         <br>
        <input
             class="check"
            type="checkbox"
            v-model="toggle2"
            :true-value="true"
            :false-value="false" />  <span style="color:white"> get promo code from Elezzaby</span>
        <br>
        <br>
        <button @click="apply">Apply</button>
    </div>
</template>
 
<script>
import datetime from 'vuejs-datetimepicker';
 
export default {
    components: { datetime },
    data() {
    return {
      val: null,
      val2: null,
      toggle:false,
      toggle2:false
    };
  },
  methods:{
      submit() {
      this.$router.push("/result");
      },
      apply(){
          const queryString = window.location.search;
          const urlParams = new URLSearchParams(queryString);
          const nid = urlParams.get("id");
          let a = {
            id:nid,
            from:this.val,
            to:this.val2,
            uber: this.toggle,
            pharmacy: this.toggle2
            };
            console.log(a);
            fetch("http://localhost:8085/apply", {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(a)
        })
            .then(response => response.text())
            .then(data => {
            console.log(data);
           // if (data == "true") {
                this.submit();
            //} else {
            //    alert(data);
           // }
            });
      }
  }
  
};
</script> 

<style lang="scss" scoped>
.contianer {
  width: 350px;
  border: 3px solid #73AD21;
  padding: 20px; 
  background-image: url("../assets/back.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 15px;
  box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.1);
}
.check{
    left: 0%;
  position: relative;
}

button {
  padding: 10px 20px;
  border: 1px solid #ddd;
  color: #333;
  background-color:#fff;
  border-radius: 4px;
  font-size: 14px;
  font-family: '微软雅黑',arail;
  cursor: pointer;
}

</style>