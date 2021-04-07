interface MyDB {
    host: string;
    user: string;
    pass: string;
    name: string;
}
interface MydbOptions{
    useNewUrlParser: boolean;
    useUnifiedTopology: boolean;
}

const db: MyDB = {
    host: process.env.DB_HOST!,
    user: process.env.DB_USER!,
    pass: process.env.DB_PASS!,
    name: process.env.DB_NAME!,
};

const dbUri:string = `mongodb+srv://${db.user}:${db.pass}@${db.host}/${db.name}?retryWrites=true&w=majority`;

const dbOptions:MydbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

export {
    dbUri, 
    dbOptions
};