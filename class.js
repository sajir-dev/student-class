let classObj = {
    "name" : "class A" ,
    "teacherName" : "Mary" ,
    "students" : [ 
        {
            "name" : "Ravi" ,
            "id" : 101 ,
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
            "id" :  102,
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
            "id" : 103 ,
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
            "id" : 104 ,
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

let Sulaiman = { "name" : "Sulaiman" , "id" : 105 }

let SulaimanMarks = { "English" : 18 , "Maths" : 25}

//classObj["teacherName"] = "NewName"

classObj.students.push(Sulaiman)

// console.log(JSON.stringify(classObj))


// console.log(JSON.stringify(classObj.students[0]))

// Access particular student data : console.log(JSON.stringify(classObj.students[0].marks.English))

studentFinderCreator = (idnum) => {
    for (let i = 0; i<classObj.students.length; i++){
        if (classObj.students[i].id === idnum ){
            console.log ("inside studentFinderCreator")
            return classObj.students[i]
        }
    }
    createStudent (idnum)
    return studentFinderCreator(idnum)
}

createStudent = (idnum) => {
    let student = {"id" : idnum}
    classObj.students.push(student)
    return (console.log ("inside createStudent"))
}


//console.log(studentFinderCreator(10))

let MarkData = { "English" : 32 , "Maths" : 48 , "Computer" : 45 , "Physics" : 45 , "Chemistry" : 44 }

addMarks = (idnum, MarkData) => {
    let student = studentFinderCreator(idnum);
    student.marks = MarkData
    return studentFinderCreator(idnum);
}

addMarks(105, MarkData)

//console.log(addMarks(10, MarkData))




let SubjectMarkData = { "subject" : "English", "marks" : { "101" : "0", "102" : "0" , "103" : "0"}  }

// idAtSubjectMarkData = (SubjectMarkData) => {
//     for (idnum in SubjectMarkData.marks){
//         console.log(idnum+ " " +SubjectMarkData.marks[idnum])
//     }
// }



addMarksSubject = (SubjectMarkData) => {
    for (idnum in SubjectMarkData.marks){
        for (let i=0; i<classObj.students.length; i++){
            if (classObj.students[i].id == idnum) {
                classObj.students[i].marks[SubjectMarkData.subject] = SubjectMarkData.marks[idnum]
            }
        }
    }
}

addMarksSubject(SubjectMarkData)


// checkIds = () => {

//     console.log('inside check ID')
//     for (let i=0; i<classObj.students.length; i++){
//         console.log(classObj.students[i].id)
//     }

// }

// checkIds()

console.log(JSON.stringify(classObj.students, null, 2))



//classObj.students[0].marks[SubjectMarkData.subject] = SubjectMarkData.marks["10"]

//console.log(classObj.students[0].marks[SubjectMarkData.subject])

//addMarks(10, MarkData)

//console.log(JSON.stringify(classObj.students))





