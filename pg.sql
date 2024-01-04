create database app_task


create table user(
  id serial primary key,
  name varchar(100),
  email varchar(100),
  age int,
  created timestamp default current_timestamp,
  edited timestamp DEFAULT current_timestamp ON UPDATE current_timestamp
)

create type status_task as enum ('pending', 'process', 'completed');


create table tasks(
  id serial primary key,
  user_id int,
  title varchar(50),
  description varchar(200),
  status status_task,
  created timestamp default current_timestamp,
  edited timestamp DEFAULT current_timestamp 
)

alter table tasks
add constraint fk_user_task
foreign key (user_id)
references users(id);



-- creating functions

CREATE OR REPLACE FUNCTION select_task_by_id(task_id_param int)
RETURNS TABLE (
  task_id INT,
  user_id INT,
  title VARCHAR(50),
  description VARCHAR(200),
  status VARCHAR(50),
  created TIMESTAMP,
  edited TIMESTAMP
)
LANGUAGE SQL AS $$
  SELECT
    tasks.id AS task_id,
    users.id AS user_id,
    tasks.title,
    tasks.description,
    tasks.status,
    tasks.created,
    tasks.edited
  FROM tasks
  INNER JOIN users
  ON users.id = tasks.id
  WHERE users.id = task_id_param;
$$;

select*from select_task_by_id(1)

CREATE OR REPLACE FUNCTION select_tasks()
RETURNS TABLE (
  task_id INT,
  user_id INT,
  title VARCHAR(50),
  description VARCHAR(200),
  status VARCHAR(50),
  created TIMESTAMP,
  edited TIMESTAMP
)
LANGUAGE SQL AS $$
  SELECT
    tasks.id AS task_id,
    users.id AS user_id,
    tasks.title,
    tasks.description,
    tasks.status,
    tasks.created,
    tasks.edited
  FROM tasks
  INNER JOIN users
  ON users.id = tasks.id
$$;

select*from select_tasks()
