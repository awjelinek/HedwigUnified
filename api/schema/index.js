import { SchemaComposer } from 'graphql-compose';

require('../db'); 

const schemaComposer = new SchemaComposer();

import { UserQuery, UserMutation } from './UserSchema';
import { AuthQuery, AuthMutation } from './AuthSchema';
import { LocationQuery, LocationMutation } from './LocationSchema';
import { ProductQuery, ProductMutation } from './ProductSchema';
import { OrderQuery, OrderMutation } from './OrderSchema';
import { VendorQuery, VendorMutation, VendorSubscription } from './VendorSchema';

schemaComposer.Query.addFields({
    ...UserQuery,
    ...AuthQuery,
    ...LocationQuery,
    ...ProductQuery,
    ...OrderQuery,
    ...VendorQuery,
});

schemaComposer.Mutation.addFields({
    ...UserMutation,
    ...AuthMutation,
    ...LocationMutation,
    ...ProductMutation,
    ...OrderMutation,
    ...VendorMutation,
});

schemaComposer.Subscription.addFields({
    ...VendorSubscription
})

export default schemaComposer.buildSchema();