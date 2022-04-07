const students = [
    {
        id:10,
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 7 ]
    },
    {
        id:11,
        name: 'John Doe',
        marks: [ 9, 8, 7, 6, 7 ]
    },
    {
        id:12,
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8 ]
    },
    {
        id:13,
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9 ],
    }
]

function averageStudentMark(studentIndex) {
    const sumOfMarks = studentIndex.marks.reduce((acc, value) => value + acc)
    const averageMark = sumOfMarks / (studentIndex.marks.length)
    return averageMark;
}

function averageGroupMark(groupName) {
    const mappedGroups = groupName.map((value, index) => {return index})
    const markList = mappedGroups.map((value) => students[value].marks).reduce((acc, value) => {return acc += `,${value}`}).split(',').map((value) => Number(value))
    const sumOfMarks = markList.reduce((acc, value) => {return acc += value})
    const avgGroupMark = sumOfMarks / markList.length
    return avgGroupMark
}

alert(averageStudentMark(students[2]))
alert(averageGroupMark(students))