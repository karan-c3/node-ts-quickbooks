import QuickbooksOnline from '../online';
import api from './api.json';

const calls: Record<string, string> = {
  Create: 'create',
  Delete: 'delete',
  GetAll: 'find',
  GetById: 'get',
  GetDetails: 'get',
  Query: 'get',
  Read: 'get',
  ReadAll: 'find',
  ReadById: 'get',
  ReadByID: 'get',
  Update: 'update',
  Void: 'delete',
};

const clientId = ""
const clientSecret = ""
const accessToken = ""
const realmId = ""
const refreshToken = ""

const online = new QuickbooksOnline({
  accessToken,
  clientId,
  clientSecret,
  // use the sandbox?
  debug: false,
  // enable debugging?
  minorVersion: '59',
  onRefresh: () => {},
  realmId,
  refreshToken,
  useSandbox: process.env.NODE_ENV !== 'production',
});

const run = async () => {
  console.log("run hua");
  
  try {
    await Promise.all(
      api.item.map(async collection => {
        console.log("loop ke andar gaya");
        const name = collection.name;
        // @ts-ignore
        await collection.item.reduce(
          async (prom: Promise<any>, request: any) => {
            await prom;
            const requestName = request.name.replace(/\w+?\s?-\s?/, '');
            const requestType = calls[request.name.replace(/\w+?\s?-\s?/, '')];

            let methodName = requestType + name;
            if (requestName.toLowerCase().includes('all')) {
              if (methodName[methodName.length - 1] === 'y')
                methodName = methodName.slice(0, -1) + 'ies';
              else if (methodName[methodName.length - 1] === 's') {
                if (methodName[methodName.length - 2] !== 'e')
                  methodName += 'es';
              } else methodName += 's';
            }
            if (name === 'Reports') methodName = 'report' + requestName;
            let data = undefined;
            try {
              const method = online[
                methodName as Exclude<keyof QuickbooksOnline, 'client' | 'got'>
              ] as GotRequestFunction | EntityRequestionFunction;
              if (!method) {
                console.log('Missing Request:', methodName);
                return;
              }
              const req = request.request as Record<string, any>;
              if (req?.body?.raw) {
                try {
                  data = JSON.parse(req?.body?.raw);
                } catch (e) {
                  data = req?.body?.raw;
                }

                await method(data);
                console.log('SUCCESS:', methodName);
              }
            } catch (e: any) {
              console.log('FAILED', methodName, data, e.response.body);
            }
          },
          Promise.resolve()
        );
      })
    );
  } catch (e) {}
};

run();
