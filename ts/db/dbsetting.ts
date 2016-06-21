interface DBSetting{
	cookieSecret: string;
	db: string;
	host: string;
	prot: number;
};

export let dbSetting : DBSetting = {
	cookieSecret : 'collection',
	db: 'collection',
	host: 'localhost',
	prot: 27017
}
