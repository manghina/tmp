import { Field } from "@b/components/form/Field";
import InputRadio from "@b/components/inputs/InputRadio";
import InputText from "@b/components/inputs/InputText";
import { apiClient } from "@b/services/http/client";
import {Button, Flex, Row, Skeleton, Tabs, TabsProps} from "antd";
import {Formik, Form, useFormikContext} from "formik";
import React, { useEffect } from 'react';
import {MotoIcon} from "@/Components/Icons/MotoIcon";
import { FormattedMessage } from "react-intl";
import InputCurrency from "@b/components/inputs/InputCurrency";
import InputUpload from "@b/components/inputs/InputUpload";
import Select from "@b/components/inputs/Select";
import InputSelect from "@b/components/inputs/InputSelect";
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import {ProgressBar} from "@/Components/ProgressBar";
import InputAutoselect from "@b/components/inputs/InputAutoselect";

import inputFields from'../../../website/form/config.json'
import InputDropzone from "@b/components/inputs/InputDropzone";
export interface FormConfiguration {
    id: number
    name: string
    label: string
    type: string
    default: any
    value: string
    required: boolean
    class: string
    showOnValue: any
    group: number
    score: number
    description: any
    info: any
    spot_type: string
    ordern: string
    min: string
    max: any
    options: any[]
    params : any
}
const baseStyle: React.CSSProperties = {
    width: '40%',
};
export default function CreateSpot() {
    const [spotType, setSpotType] = React.useState<any>(null)

    return (
        <div className="max-w-[1100px] mx-auto mt-4 text-gray-800">
            <div className="bg-white rounded shadow-2xl p-4">
                <CreateMoto />
            </div>
        </div>
    )

}

const onChange = (key: string) => {
    console.log(key);
};

const fileString = localStorage.getItem('file')


const file = fileString !== null ? JSON.parse(fileString) : null;
console.log("localstorageFile>>>>>>>>>",file)

const id  = localStorage.getItem('id')

const PartialFormContainer = ({config, prev, next, currentTab, setCurrentTab}: any)  => {
    const prevI = (() => setCurrentTab(currentTab - 1))
    const nextI = (() => setCurrentTab(currentTab + 1))

    return (
        <>
            <PartialForm config={config}/>
            <Row className="flex flex-row justify-start gap-2">
            {
                prev && (<Button key={'prev-' + currentTab} icon={<ArrowLeftOutlined />} onClick={() => prevI()}><FormattedMessage id='global.back' /></Button>)
            }
            {
                next && (<Button key={'next-' + currentTab} icon={<ArrowRightOutlined />} onClick={() => nextI()}><FormattedMessage id='global.next' /></Button>)
            }
            </Row>
        </>
    )
}

const FormProgressBar = ({setFinishStatus}: any) => {
    const form = useFormikContext();
    //const processPercent = calculateProgress(form.values) == 100? true : false;
    const processPercent = true;
    setFinishStatus(processPercent)
    return  <ProgressBar progress={calculateProgress(form.values)} />
}



const DebugForm = ({progress}: any) => {
    console.log("progress>>>>",progress)

    const form = useFormikContext();
    console.log("form>>>>>>",form)
    return  <pre>{JSON.stringify(form.values)}</pre>
}












const isValid = ({progress}: any) => {
    const form = useFormikContext();
    return form.errors
}

const PartialForm = ({config}: any)  => {
    console.log("config>>>>>>>",config)
    return (
        <Flex wrap="wrap" gap="small"  key={'contentf'}>
            {config.map((el: FormConfiguration) => {
                console.log("el>>>>>",el)
                switch (el.type) {
                    case 'autocomplete':
                        return (
                            <div style={{ ...baseStyle }}>
                                <Field name={el.name} localeId={el.label} url={el.params.url} field={el.params.field} required={el.required} component={InputAutoselect} />
                            </div>
                        )
                    case 'text':
                        return (
                            <div style={{ ...baseStyle }}>
                                <Field name={el.name} localeId={el.label} component={InputText} required={el.required} />
                            </div>
                        )
                    case 'select':
                        return (
                            <div style={{ ...baseStyle }}>
                                <Field name={el.name} className={'w-[120px]'} localeId={el.label} required={el.required} items={el.options} component={InputSelect} />
                            </div>
                        )
                    case 'radio':
                        return (
                            <div style={{ ...baseStyle }}>
                                <Field name={el.name} localeId={el.label} options={el.options} required={el.required} component={InputRadio} />
                            </div>
                        )
                    case 'currency':
                        return (
                            <div style={{ ...baseStyle }}>
                                <Field name={el.name} localeId={el.label} options={el.options} required={el.required} component={InputCurrency} />
                            </div>
                        )
                    case 'image':
                        return (
                            <div style={{ ...baseStyle }} >
                                <Field name={el.name} localeId={el.label} options={el.options} required={el.required} component={InputUpload} />
                            </div>
                            
                        )
                    case 'dropzone':
                        return (
                            <div style={{ ...baseStyle }}>
                                <Field name={el.name} localeId={el.label} options={el.options} required={el.required} component={InputDropzone} />
                            </div>
                        )
                }
            })}

        </Flex>
    )
}

function calculateProgress(data: any) {
    const [requiredFields, setRequiredFields] = React.useState<any>(inputFields)
    const requiredFieldsNumber = inputFields.flat().filter((item:any) => item.required).length;
    const keys = Object.keys(data)
    let countNotEmpty = 0;
    requiredFields.forEach((fields:any) => {
        fields.forEach((field:any) => {
            if (keys.includes(field.name) && data[field.name] !== "") {
                countNotEmpty++;
            }
        })
    });
    const value = (countNotEmpty / requiredFieldsNumber) * 100
    return parseInt(value.toString())
}

function CreateMoto() {
    const id = localStorage.getItem('id')

    const [config, setConfig] = React.useState<any>(null);
    console.log("config>>>>>>>",config)
    const [currentTab, setCurrentTab] = React.useState(0);
    const [progress, setProgress] = React.useState(0);
    const [finishStatus, setFinishStatus] = React.useState(false);
    useEffect(() => {
        apiClient.get("/api/form/moto").then((response) => {
            setConfig(response.data)
        })
    }, [])

    const onSubmit = (values: any) => {
        console.log("values>>>>>",values)

        apiClient.post(`/api/website/spots/${id}`, {...values,file}).then((response) => {
            alert("ok")
        }).catch((error) => {
            alert("error")
        })
    }


    if (config === null) return (
        <Skeleton active />
    )


    const items: TabsProps['items'] = [
        {
            key: '0',
            label: <span className="text-gray-800"><FormattedMessage id='form.moto.tabs.general' /></span>,
            children: <PartialFormContainer config={config[0]} prev={false} next={true} currentTab={currentTab} setCurrentTab={setCurrentTab} />,
        },
        {
            key: '1',
            label: <span className="text-gray-800"><FormattedMessage id='form.moto.tabs.form' /></span>,
            children: <PartialFormContainer config={config[1]} prev={true} next={true} currentTab={currentTab} setCurrentTab={setCurrentTab} />,
        },
        {
            key: '2',
            label: <span className="text-gray-800"><FormattedMessage id='form.moto.tabs.details' /></span>,
            children: <PartialFormContainer config={config[2]} prev={true} next={true} currentTab={currentTab} setCurrentTab={setCurrentTab} />,
        },
        {
            key: '3',
            label: <span className="text-gray-800"><FormattedMessage id='form.moto.tabs.position' /></span>,
            children: <PartialFormContainer config={config[3]} prev={true} next={true} currentTab={currentTab} setCurrentTab={setCurrentTab} />,
        },
        {
            key: '4',
            label: <span className="text-gray-800"><FormattedMessage id='form.moto.tabs.contacts' /></span>,
            children: <PartialFormContainer config={config[4]} prev={true} next={false} currentTab={currentTab} setCurrentTab={setCurrentTab} />,
        },
    ];

    return (
        <Formik initialValues={{}} onSubmit={onSubmit}>
            <Form>
                <FormProgressBar setFinishStatus={setFinishStatus}/>
                <Tabs
                    activeKey={currentTab.toString()}
                    items={items}
                    onChange={(key) => setCurrentTab(parseInt(key)) }
                />
                <Row className="flex flex-row justify-start gap-2 mt-2">
                    <Button key={'submit'} type="primary" disabled={!finishStatus}  htmlType="submit"><FormattedMessage id='global.save' /></Button>
                </Row>
                <DebugForm/>

            </Form>
        </Formik>
    );

}
