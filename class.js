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



//classObj["teacherName"] = "NewName"



let Sulaiman = { "name" : "Sulaiman" , "id" : 105 }

let SulaimanMarks = { "English" : 18 , "Maths" : 25}

classObj.students.push(Sulaiman)


studentFinderCreator = (idnum) => {
    for (let i = 0; i< classObj.students.length; i++){
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
        for (let i=0; i< classObj.students.length; i++){
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


editMarks = (idnum, subject, newMark) => {
    for (let i = 0; i< classObj.students.length; i++){
        if (classObj.students[i].id===idnum){
            classObj.students[i].marks[subject] = newMark
            return true
        }
    }
    return ("no such records")
}

editMarks ( 101, 'English', 5000 )



removeStudent = (idnum) => {
    for (let i=0; i< classObj.students.length; i++){
        if (classObj.students[i].id === idnum){
            classObj.students.splice (i, 1)
            console.log ("student with ID: "+ idnum + " removed from the record")
        }
    }
    return false
}

//removeStudent (101)



deleteSubject = (subject) => {
    for (let i = 0; i < classObj.students.length; i++){
        delete classObj.students[i].marks[subject]
    }
    return console.log(subject + " entry deleted from all student records")
}

//deleteSubject("Maths")


getTopper = (subject) => {
    let index = 0
    let topperMark = classObj.students[0].marks[subject]
    for (let i = 1; i < classObj.students.length; i++) {
        if (classObj.students[i].marks[subject] > topperMark){
            topperMark = classObj.students[i].marks[subject]
            index = i
        }
    }
    return classObj.students[index]
}

//console.log(getTopper( "Physics"))




getAvg = (subject) => {
    let subjectSum = 0
    for (let i = 1; i < classObj.students.length; i++) {
        subjectSum = subjectSum +  classObj.students[i].marks[subject]
    }
    return subjectSum/classObj.students.length
}



sortingName = () => { 
    let start = classObj.students[0].name
    for (let i = 0; i< classObj.students.length-1; i++){
        for ( let j = i; j< classObj.students.length; j++){
            if (classObj.students[i].name > classObj.students[j].name){
                let temp = classObj.students[i]
                classObj.students[i] = classObj.students [j]
                classObj.students[j] = temp
            }
        }
    }
    return classObj.students
}

//console.log (sortingName())




sortingMarks = (subject) => { 
    let start = classObj.students[0].marks[subject]
    for (let i = 0; i< classObj.students.length-1; i++){
        for ( let j = i; j< classObj.students.length; j++){
            if (classObj.students[i].marks[subject] < classObj.students[j].marks[subject]){
                let temp = classObj.students[i].marks[subject]
                classObj.students[i].marks[subject] = classObj.students[j].marks[subject]
                classObj.students[j].marks[subject] = temp
            }
        }
    }
    return classObj.students
}

console.log (sortingMarks("Maths"))


//console.log (getAvg ("Maths"))

//console.log(typeof(classObj.students[3].marks["English"]))

//console.log(JSON.stringify(classObj.students, null, 2))









