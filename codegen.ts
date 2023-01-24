import {CodegenConfig} from "@graphql-codegen/cli";

const config: CodegenConfig = {
    schema: process.env.NEXT_PUBLIC_GRAPHQL_URI,
    documents: [
        "lib/**/*.ts",
        "lib/**/*.tsx",
        "components/**/*.tsx",
        "pages/**/*.tsx"
    ],
    generates: {
        "./gql/": {
            preset: "client",
            presetConfig: {
                gqlTagName: "gql",
                fragmentMasking: false
            },
            plugins: []
        }
    },
    ignoreNoDocuments: true
};

export default config;
