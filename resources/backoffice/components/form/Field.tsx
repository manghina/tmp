import {ComponentType, ReactNode} from "react";
import {Field as FKField} from "formik";
import { FormattedMessage } from "react-intl";

export type FieldProps = {
    label?: ReactNode;
    localeId?: string
    name: string;
    className?: string;
    options?: any[];
    component?: ComponentType<any>;
    items?: any[];
    obb?: boolean;
    url?: boolean;
    required?: boolean;
    field?: boolean;
    placeholder?: string;
}

export const Field = ({required, name, label, localeId, component, obb, placeholder, ...rest}: FieldProps) => {
    return (
        <div className="mb-4">
            <div className="font-semibold text-[#707070]">
                {label}
                {localeId && <FormattedMessage id={localeId} />}
                {/* {obb && <span className={'text-red-600'}> *</span>} */}
                {required && <span className="text-red-600">*</span>}
            </div>
            <FKField required={required} name={name} component={component} {...rest}/>
        </div>
    )
}
