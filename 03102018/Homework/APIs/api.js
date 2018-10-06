

function getGithubData() {
    axios.get("https://btvn-web15s.herokuapp.com/api/web15")
      .then(res => {
          var student = res.data.students;
          for(var i = 0 ; i < student.length ; i ++){
              console.log(student[i]);
          }
      })
      .catch(err => {
        console.log(err);
      });
}