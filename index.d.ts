declare module 'mongoose-schema-to-graphql' {

    import * as mongoose from 'mongoose';

    type ClassFieldType =
        'GraphQLObjectType' |
        'GraphQLInputObjectType' |
        'GraphQLInterfaceType' |
        'GraphQLUnionType' |
        'GraphQLEnumType';

    type ThunkType = () => { [key: string]: any };

    type ObjectKeyStringValueAnyType = { [key: string]: any };

    type ExtendFieldType = ObjectKeyStringValueAnyType | ThunkType;

    type ConfigurationObject = {
        name: string,
        description?: string,
        class: ClassFieldType,
        schema: mongoose.Schema,
        exclude?: RegExp | [string],
        extend?: ExtendFieldType,
        fields?: ObjectKeyStringValueAnyType,
    };

  export function mainFunction(config: ConfigurationObject): any;
}
