let classObj = {
    "name" : "class A" ,
    "teacherName" : "Mary" ,
    "students" : [ 
        {
            "name" : "Ravi" ,
            "id" : "101" ,
            "marks" : [
                {"subject" : "English" , "mark" : 25}, 
                {"subject" : "Maths", "mark" : 48}, 
                {"subject" : "Physics", "mark" : 40}, 
                {"subject" : "Chemistry", "mark" : 30},
                {"subject" : "Computer", "mark" : 20}
            ]
        },
        {
            "name" : "Aju" ,
            "id" :  "102",
            "marks" : [
                {"subject" : "English" , "mark" : 35}, 
                {"subject" : "Maths", "mark" : 38}, 
                {"subject" : "Physics", "mark" : 33}, 
                {"subject" : "Chemistry", "mark" : 34},
                {"subject" : "Computer", "mark" : 30}
            ]
        },
        {
            "name" : "Mini" ,
            "id" : "103" ,
            "marks" : [
                {"subject" : "English" , "mark" : 12}, 
                {"subject" : "Maths", "mark" : 49}, 
                {"subject" : "Physics", "mark" : 18}, 
                {"subject" : "Chemistry", "mark" : 30},
                {"subject" : "Computer", "mark" : 40}
            ]
        },
        {
            "name" : "Binu" ,
            "id" : "104" ,
            "marks" : [
                {"subject" : "English" , "mark" : 49}, 
                {"subject" : "Maths", "mark" : 49}, 
                {"subject" : "Physics", "mark" : 47}, 
                {"subject" : "Chemistry", "mark" : 46},
                {"subject" : "Computer", "mark" : 50}
            ]
        }
    ]
}

//console.log(classObj.students[2].marks)

//classObj["teacherName"] = "NewName"


let sampleStudent = { 
    "name": "nijesh",
    "id": "110" ,
    "marks": [
        {"subject": "English", "mark": 20},
        {"subject": "Maths", "mark": 40},
        {"subject" : "Physics", "mark" : 38}, 
        {"subject" : "Chemistry", "mark" : 46},
        {"subject" : "Computer", "mark" : 40}
     ]
}


createStudent = (studentObj) => { //Creating student from a Student
    classObj.students.push(studentObj)
    return (studentObj.name + " with ID " + studentObj.id + "has generated")
}
//createStudent(sampleStudent)


createStudent = (idnum, name) => { //Creating student from idnum and name
    let student = {"id" : idnum, "name" : name}
    classObj.students.push(student)
    return (console.log ("inside createStudent"))
}
//createStudent (108, "Amal")

studentFinder = (idnum) => {
    for (let i = 0; i< classObj.students.length; i++){
        if (classObj.students[i].id === idnum ){
            console.log ("inside studentFinderCreator")
            return classObj.students[i]
        }
    }
    return console.log("Could not find the student")
}
//console.log(studentFinderCreator(10))

let SampleMarkData = [
    {"subject" : "English" , "mark" : 20}, 
    {"subject" : "Maths", "mark" : 40}, 
    {"subject" : "Physics", "mark" : 48}, 
    {"subject" : "Chemistry", "mark" : 38}]

addMarks = (idnum, markData) => {
    let student = studentFinder(idnum)
    student.marks = markData
    return 1
}

//addMarks (110, SampleMarkData)


//let MarkData = { "English" : 32 , "Maths" : 48 , "Computer" : 45 , "Physics" : 45 , "Chemistry" : 44 }

// addMarks = (idnum, MarkData) => {
//     let student = studentFinder(idnum);
//     student.marks = MarkData
//     return studentFinder(idnum);
// }

//addMarks(105, MarkData)
//console.log(addMarks(10, MarkData))


let SampleMarkForSubject = [{"id" : "103", "mark" : 11}, 
                            {"id" : "104", "mark" : 11}] 

// idAtSubjectMarkData = (SubjectMarkData) => {
//     for (idnum in SubjectMarkData.marks){
//         console.log(idnum+ " " +SubjectMarkData.marks[idnum])
//     }
// }


addMarksForSubject = (markForSubject, subject) => {
    for (let i=0 ; i<markForSubject.length; i++){
        for (let j=0; j<classObj.students.length; j++){
            if (classObj.students[j].id === markForSubject[i].id){
                for (let k=0; k<classObj.students[j].marks.length; k++){
                    if (classObj.students[j].marks[k].subject === subject){
                        classObj.students[j].marks[k].mark = markForSubject[i].mark
                    } 
                }
            }
        }
    }
}

//addMarksForSubject(SampleMarkForSubject, "Computer")



// let SubjectMarkData = { "subject" : "English", "marks" : { "101" : "0", "102" : "0" , "103" : "0"}  }
// addMarksSubject = (SubjectMarkData) => {
//     for (idnum in SubjectMarkData.marks){
//         for (let i=0; i< classObj.students.length; i++){
//             if (classObj.students[i].id == idnum) {
//                 classObj.students[i].marks[SubjectMarkData.subject] = SubjectMarkData.marks[idnum]
//             }
//         }
//     }
// }
// addMarksSubject(SubjectMarkData)

// checkIds = () => {
//     console.log('inside check ID')
//     for (let i=0; i<classObj.students.length; i++){
//         console.log(classObj.students[i].id)
//     }
// }
// checkIds()


editMarks = (idnum, subject, newMark) => {
    for (let i = 0; i< classObj.students.length; i++){
        if (classObj.students[i].id === idnum){
            for (k=0; k<classObj.students[i].marks.length; k++){
                if (classObj.students[i].marks[k].subject === subject){
                    classObj.students[i].marks[k].mark = newMark
                    return true
                }
            }
        }
    }
    return ("no such records")
}
editMarks ( '101', 'English', 5000 )


removeStudent = (idnum) => {
    for (let i=0; i< classObj.students.length; i++){
        if (classObj.students[i].id === idnum){
            classObj.students.splice (i, 1)
            console.log ("student with ID: "+ idnum + " removed from the record")
        }
    }
    return false
}
//removeStudent ('101')


deleteSubject = (subject) => {
    for (let i = 0; i < classObj.students.length; i++){
        for (let k = 0; k <classObj.students[i].marks.length; k++){
            if (classObj.students[i].marks[k].subject === subject){
                classObj.students[i].marks.splice(k,1)
            }
        }
    }
    return console.log(subject + " entry deleted from all student records")
}
//deleteSubject("Maths")



//console.log(JSON.stringify(classObj.students, null , 2))




getTopper = (sub) => {
    let index = 0 
    let subjectIndex = 0
    
    for (let k = 0; k <classObj.students[0].marks.length; k++){
        if (classObj.students[0].marks[k].subject === sub){
            subjectIndex = k
        }
    }

    let topperMark = classObj.students[0].marks[subjectIndex].mark

    for (let i = 1; i < classObj.students.length; i++) {
        for (let k = 0; k <classObj.students[i].marks.length; k++){
            if (classObj.students[0].marks[k].subject === sub){
                subjectIndex = k
            }
        }
        if (classObj.students[i].marks[subjectIndex].mark > topperMark){
            topperMark = classObj.students[i].marks[subjectIndex].mark
            index = i
        }
    }
    return classObj.students[index]
}
//console.log(getTopper( "English"))


getAvg = (sub) => {
    let subjectSum = 0
    let subjectIndex = 0

    for (let k = 0; k <classObj.students[0].marks.length; k++){
        if (classObj.students[0].marks[k].subject === sub){
            subjectIndex = k
        }
    }

    subjectSum = classObj.students[0].marks[subjectIndex].mark

    for (let i = 1; i < classObj.students.length; i++) {
        for (let k = 0; k <classObj.students[i].marks.length; k++){
            if (classObj.students[0].marks[k].subject === sub){
                subjectIndex = k
            }
        }
        subjectSum = subjectSum +  classObj.students[i].marks[subjectIndex].mark
    }

    return subjectSum/classObj.students.length
}
//console.log(getAvg("Computer"))


sortOnName = () => { 
    for (let i = 0; i< classObj.students.length-1; i++){
        for ( let j = i; j< classObj.students.length; j++){
            if (classObj.students[i].name > classObj.students[j].name){
                let temp = classObj.students[i]
                classObj.students[i] = classObj.students [j]
                classObj.students[j] = temp
            }
        }
    }
    return JSON.stringify(classObj.students, null , 2)
}
//console.log (sortOnName())


sortOnMarks = (sub) => { 
    let subjectIndex1
    let subjectIndex2

    for (let i = 0; i< classObj.students.length-1; i++){
        for (let ik = 0; ik <classObj.students[i].marks.length; ik++){
            if (classObj.students[i].marks[ik].subject === sub){
                subjectIndex1 = ik
            }
        }   
        for ( let j = i; j< classObj.students.length; j++){
            for (let jk = 0; jk <classObj.students[j].marks.length; jk++){
                if (classObj.students[j].marks[jk].subject === sub){
                    subjectIndex2 = jk
                }
            }
            if (classObj.students[i].marks[subjectIndex1].mark < classObj.students[j].marks[subjectIndex2].mark){
                let temp = classObj.students[i]
                classObj.students[i] = classObj.students[j]
                classObj.students[j] = temp
            }
        }
    }
    return JSON.stringify(classObj.students, null, 2)
}
//console.log (sortOnMarks("English"))

//console.log (getAvg ("Maths"))

//console.log(typeof(classObj.students[3].marks["English"]))

//console.log(JSON.stringify(classObj.students, null, 2))