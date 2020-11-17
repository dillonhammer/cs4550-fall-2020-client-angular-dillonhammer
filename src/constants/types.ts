export default interface Course {
  _id: string;
  title: string;
  owner: string;
  lastUpdated: string;
  _nuid: string;
  _domain: string;
  _createdAt: string;
  _updatedAt: string;
  __v: string;
}

export default interface Module {
  _id: string;
  title: string;
  _nuid: string;
  _courses: string;
  _domain: string;
  _createdAt: string;
  _updatedAt: string;
  __v: string;
  editing: boolean;
}

export default interface Lesson {
  _id: string;
  title: string;
  _nuid: string;
  _modules: string;
  _domain: string;
  _createdAt: string;
  _updatedAt: string;
  __v: string;
  editing: boolean;
}
