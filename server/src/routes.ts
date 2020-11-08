//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-idsutil
import { idsutil } from './sd-services/idsutil';
//CORE_REFERENCE_IMPORT-ids
import { ids } from './sd-services/ids';
//CORE_REFERENCE_IMPORT-transfer
import { transfer } from './sd-services/transfer';

export const UserRoutes = [
    //CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY
  //CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-idsutil
idsutil,
  //CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-ids
ids,
  //CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-transfer
transfer,
];