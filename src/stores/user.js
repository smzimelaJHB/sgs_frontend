
export const show_pass = (my_type)=> {
      my_type.value = !my_type.value;
  }


export const register = (router,api,form)=>{
    api
      .post("/register", form)
      .then((response) => {
        router.push("/verify-email");
      })
      .catch((error) => {
        console.log(error);
      });
  }






