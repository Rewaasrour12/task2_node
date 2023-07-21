const fs = require("fs")
/////////////////// [ ADD ] ///////////////////////////////////
  const addPerson = (id , fname , lname , age , city ) => {
       const allData = loadData()

        const duplicatedData = allData.filter ((obj) => {
            return obj.id === id
        })
        console.log(duplicatedData)

        if (duplicatedData.length == 0) {
        allData.push ({
            id : id,
            fname : fname,
            lname : lname,
            age : age,
            city : city
        })

        saveAllData(allData)
    } else {
        console.log("ERROR : DUPLICATED ID")
    }
  }

// // TO Obj
  const loadData = () => {
    try {
         const dataJson = fs.readFileSync ("my_data.json").toString()
        return JSON.parse (dataJson)
    } catch {
             return []
    }
  }
// // To Json

  const saveAllData = (allData) => {
      const saveAllDataJson = JSON.stringify(allData) 
      fs.writeFileSync("my_data.json" , saveAllDataJson)
  }
////////////////////////// [ DELETE ]///////////////////////////////

 const deleteData = (id) => {
        const allData = loadData()

        const dataToKeep = allData.filter ((obj) => {
             return obj.id !== id 
        })
        // console.log(dataToKeep)
        saveAllData(dataToKeep)
 }


/////////////////////////// [ LIST ]//////////////////////////////////

    const listData = () => {
        const allData = loadData()

        allData.forEach ((obj) => {
            console.log(" FirstName : " + obj.fname + " ||| " ," LastName : " + obj.lname + " ||| " ,
              " city : " + obj.city)
        })
    }
     
/////////////////////////// [ READ ]/////////////////////////////////
      

const readData = (id) => {
    const allData = loadData()

    const itemNeeded = allData.find((obj) => {
        return obj.id == "5"
        //return obj.id == id 
 
    })
    console.log(itemNeeded)

}
/////////////////////////// EXPORT /////////////////////////////

module.exports = {
    addPerson,
    deleteData, 
    listData,
    readData,

}