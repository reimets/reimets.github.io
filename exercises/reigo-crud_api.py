import sqlite3

from fastapi import Depends, FastAPI, HTTPException

app = FastAPI()

DATABASE = "sda_academy.sqlite"


def get_db():
    conn = sqlite3.connect(DATABASE)
    try:
        yield conn
    finally:
        conn.close()


@app.on_event("startup")
def startup_event():
    with sqlite3.connect(DATABASE) as conn:
        conn.execute(
            """
        CREATE TABLE IF NOT EXISTS students (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            "name" TEXT NOT NULL,
            age INTEGER NOT NULL,
            grade TEXT NOT NULL
        );
        """
        )

        conn.execute(
            """
        CREATE TABLE IF NOT EXISTS courses (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            "name" TEXT NOT NULL,
            description TEXT,
            instructor TEXT NOT NULL
            );
            """
        )

# siin [hendame kaks tabelit
        conn.execute(
            """
        CREATE TABLE IF NOT EXISTS student_courses (
            student_id INTEGER,
            course_id INTEGER,
            PRIMARY KEY (student_id, course_id),
            FOREIGN KEY (student_id) REFERENCES students (id),
            FOREIGN KEY (course_id) REFERENCES courses (id)
            );
            """
        )


@app.get("/")
def root():
    return{"message": "healthy"}


# Create
@app.post("/students/")
def create_student(name: str, age: int, grade: str, conn=Depends(get_db)):
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO students (name, age, grade) VALUES (?, ?, ?)", (name, age, grade)
    )
    conn.commit()
    return {"id": cursor.lastrowid, "name": name, "age": age, "grade": grade}


# Read Courses
@app.get("/courses/{course_id}")
def read_course(course_id: int, conn=Depends(get_db)):
    cursor = conn.cursor()
    course = cursor.execute(
        "SELECT * FROM courses WHERE id = ?", (course_id,) 
    ).fetchone()
    if course is None:
        raise HTTPException(status_code=404, detail="Course not found")
    return {
        "Course data": f"{[]}"
    }
    
############ pooleli ##################



# Read
@app.get("/students/{student_id}")
def read_student(student_id: int, conn=Depends(get_db)):
    cursor = conn.cursor()
    student = cursor.execute(
        "SELECT * FROM students WHERE id = ?", (student_id,)
    ).fetchone()
    if student is None:
        raise HTTPException(status_code=404, detail="Student not found")
    return {
        "id": student[0],
        "name": student[1],
        "age": student[2],
        "grade": student[3],
    }


# Update
@app.put("/students/")
def update_student(
    student_id: int, name: str, age: int, grade: str, conn=Depends(get_db)
):
    cursor = conn.cursor()
    # The ? placeholder is a security option from the cursor to prevent SQL Injection
    cursor.execute(
        "UPDATE students SET name = ?, age = ?, grade = ? WHERE id = ?",
        (name, age, grade, student_id),
    )
    conn.commit()
    return {"id": student_id, "name": name, "age": age, "grade": grade}


# Delete
@app.delete("/students/")
def delete_student(student_id: int, conn=Depends(get_db)):
    cursor = conn.cursor()
    cursor.execute("DELETE FROM students WHERE id = ?", (student_id,))
    conn.commit()
    return {"message": f"Student {student_id} have been deleted successfully"}


# Create Courses
@app.post("/courses/")
def create_course(name: str, description: str, instructor: str, conn=Depends(get_db)):
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO courses (name, description, instructor) VALUES (?, ?, ?)", (name, description, instructor),
    )
    conn. commit()
    return{"id": cursor.lastrowid, "name": name, "description": description, "instructor": instructor}



if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8080)
