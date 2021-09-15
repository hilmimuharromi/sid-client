import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Fabric, Customize, EndCustomize } from '../components'
import { Row,  Button } from 'antd'
import {connect} from 'react-redux'
import {SetUser, SetFabric, SetCustomize} from '../stores/action'

const CustomPage = (props) => {
    const {dataStore, SetFabric, SetCustomize} = props
    const [active, setActive] = useState('fabric')
    const params = useParams()
    const history = useHistory()
    const [dataCustom, setDataCustom] = useState([])

  

    useEffect(() => {
        setActive(params.style)
        const filterData = dataStore.find((item) => item.product === params.product)
        console.log(filterData, 'filter data ....')
        setDataCustom(filterData)
    }, [params, dataStore.length])

    function activeComponent() {
        if (active === "fabric") {
            return <Fabric data={dataCustom} SetData={(data) => SetFabric(data, params)} />
        } else if (active === 'customize') {
            return <Customize dataCustom={dataCustom} setDataCustom={(data) => SetCustomize(data, params)} params={params} />
        } else if (active === 'endCustomize') {
            return <EndCustomize data={dataCustom} />
        }
    }



    function handleActive(status) {
        if (status === 'next') {
            if (active === 'fabric') {
                history.push(`/custom/${params.product}/customize`)
                setActive('customize')
            } else if (active === 'customize') {
                history.push(`/custom/${params.product}/endCustomize`)
                setActive('endCustomize')
            } else if (active === 'endCustomize') {
                history.push(`/measurement/${params.product}`)
            }
        } else if (status === 'back') {
            if (active === 'customize') {
                setActive('fabric')
                history.push(`/custom/${params.product}/fabric`)
            } else if (active === 'endCustomize') {
                setActive('customize')
                history.push(`/custom/${params.product}/customize`)
            }
        }
    }


    return (
        <>
            <Row justify="center" style={{ minHeight: '70vh' }}>
                {
                    activeComponent()
                }
                {JSON.stringify(dataCustom)}
            </Row>
                    <Row justify="center">
                        {active !== 'fabric' &&
                            <Button className="button-primary" onClick={() => handleActive('back')}>
                                Back
                            </Button>
                        }
                        <Button className="button-primary" onClick={() => handleActive('next')}>
                            Next
                        </Button>
                    </Row> 
        </>
    )
}


const mapStateToProps = state => {
    const {User, Custom} = state;

    return {
        dataUser: User,
        dataStore: Custom.data
    }
}

const mapDispatchToProps = {
    SetUser, SetFabric, SetCustomize
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomPage)