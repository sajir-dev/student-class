let classObj = {
    "name" : "class A" ,
    "teacherName" : "Mary" ,
    "students" : [ 
        {
            "name" : "Ravi" ,
            "id" : 8 ,
            "marks" : {
                "English" : 40 ,
                "Maths" : 35 ,
                "Computer" : 42 ,
                "Physics" : 28 ,
                "Chemistry" : 32
            }

        },
        {
            "name" : "Aju" ,
            "id" :  14,
            "marks" : {
                "English" : 45 ,
                "Maths" : 39 ,
                "Computer" : 49 ,
                "Physics" : 22 ,
                "Chemistry" : 34
            }

        },
        {
            "name" : "Mini" ,
            "id" : 17 ,
            "marks" : {
                "English" : 28 ,
                "Maths" : 25 ,
                "Computer" : 22 ,
                "Physics" : 35 ,
                "Chemistry" : 40
            }

        },
        {
            "name" : "Binu" ,
            "id" : 6 ,
            "marks" : {
                "English" : 32 ,
                "Maths" : 48 ,
                "Computer" : 45 ,
                "Physics" : 45 ,
                "Chemistry" : 44
            }

        }

    ]
}

// addStudent = (studentName, id) => {
//     classObj["students"] = { 
//         "name" : studentName
//     }
// }
// addStudent("Sulaiman");

let Sulaiman = { "name" : "Sulaiman" , "id" : 10 }

let SulaimanMarks = { "English" : 18 , "Maths" : 25}

classObj["teacherName"] = "NewName"

classObj.students.push(Sulaiman)

//classObj.students.Sulaiman["marks"]={ "English" : 18 , "Maths" : 25} Can do programmatically with if condition that matches name or ID

console.log(JSON.stringify(classObj))