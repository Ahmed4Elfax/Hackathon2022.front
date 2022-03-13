<template>
<div>
    <div class="contianer">
         <span style="color:blue"> Center name is</span> {{ center }}
    </div>
    <br>
    <div class="contianer">
         <span style="color:blue;   font-weight: bold;"> UBER  </span> <br>
         <span style="color:red"> Driver's name: </span> {{ driver }}<br>
         <span style="color:red"> Car Number: </span> {{ car }}<br>
         <span style="color:red"> Car brand: </span> {{ brand }}<br>
         <span style="color:red"> Time: </span> {{ time }}<br>
    </div>
    <br>
    <div class="contianer">
         <span style="color:blue"> Elazaby promo code is</span> {{ promo }}
    </div>
    <br>
    <div class="contianer">
         <span style="color:blue"> Show Location</span> <br>
         <img alt="Vue logo" src="../assets/images.jpg" />
    </div>
</div>
</template>
 
<script>
export default {
    
    data() {
    return {
      center:"Medcare-cairo Center",
      driver:"Ahmed Youssef Omar",
      car:"1238",
      brand:"chevrolet",
      time:"13/3/2022 07:10:00",
      promo:"A1Y2P3O7"
    };
  },
  methods:{
      submit() {
      this.$router.push("/result");
      },
      
  }
  
};
</script> 


<style scoped>
.contianer {
  width: 350px;
  border: 3px solid #73AD21;
  padding: 20px; 
  
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 15px;
  box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.1);
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