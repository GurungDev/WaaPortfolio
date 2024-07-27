import ns1En from "@/locales/en/ns1.json";
import ns2En from "@/locales/en/ns2.json";
import fallbackEn from "@/locales/en/ns2.json";

declare module 'i18next'{
    interface CustomTypeOptions {
            defaultNS: 'ns1';
            resources:{
                ns1: typeof ns1En;
                ns2: typeof ns2En;
                fallbac: typeof fallbackEn;
            }
        
    }
}