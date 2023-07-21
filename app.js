const  fs = require ("fs")
const yargs = require("yargs")

const our_commands = require ("./our_commands")

yargs.command({
    command : "add",
    describe: "to add Info of persons",
    builder: {
        // id : {
        //     describe: "adding the id ",
        //     demandOption: true,
        //     type: "string"
        // },
        fname : {
            describe: "adding the first name ",
            demandOption: true,
            type: "string"
        },
        lname : {
            describe: "adding the last name ",
            demandOption: true,
            type: "string"
        },
        // age : {
        //     describe: "adding the age ",
        //     demandOption: true,
        //     type: "string"
        // },
        city : {
            describe: "adding the city ",
            demandOption: true,
            type: "string"
        }
    },
    
    handler: (x)=> {
        our_commands.addPerson(  x.id , x.fname , x.lname , x.age , x.city )
    }
 })

 yargs.command({
    command : "delete",
    describe: "to delete Info of persons",
    handler: (x)=> {
        our_commands.deleteData(x.id)
    }
 })

 yargs.command ({
    command : "read",
    describe : "to read data of fifth person",
    builder : {
        id : {
            describe : "this is id description in read command",
            demandOption : false,
            type : "string"
        }
    },
    handler : (x)=> {
        our_commands.readData (x.id)
        //our_commands.readData ("5")
    }
 })

//////////////////////////////////////////////////

 yargs.command ({
    command :"list",
    describe : "list data",
    handler : ()=>{
        our_commands.listData()
    }
 })
 
yargs.parse() 
   
  