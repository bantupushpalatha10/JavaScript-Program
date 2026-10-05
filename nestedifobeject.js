

// -------------NESTED OBJECT-------------

let college={
    name:"mlrit",
    branch:{
        cours:"computerseciens",
        addrees:{
            colony:"dundigal",
            area:"gandimaisamma",
            dis:"hyb"

        },
        courses:{
            "cse":{
                duration:"4years",
                fee:200000,
            },
            "ECE":{
                duration:"4yerars",
                fee:4000000,
            },
        },

    },
    rating:4.4,
}

// retrieve data
console.log(college["branch"]);
console.log(college["branch"]["courses"]);
console.log(college["branch"]["courses"]["ces"]);

// upadating the data
college["branch"]["addrees"]["dis"]="vikb"
console.log(college["branch"]["addrees"]);

// add new properties
college["collegetimings"]="9am to 3 pm"
console.log(college);

// delete data
delete college["branch"]["area"]
console.log(college["area"]);
