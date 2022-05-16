import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux'
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { chooseName,
    chooseClassification,
    chooseDescription,
    chooseEngine,
    chooseSpeed,
    chooseRange,
    chooseShield,
    chooseSize,
    chooseWeapons, } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';

interface ShipFormProps{
    id?:string;
    data?:{};
}

interface ShipState{
    name:string;
    classification:string;
    description:string;
    engine:string;
    max_speed:string;
    range:string;
    shield:string;
    size:string;
    weapons:string;

}

export const ShipForm = (props:ShipFormProps) => {

    const dispatch = useDispatch();
    let {shipData, getData } = useGetData();
    const store = useStore();
    
    // How to select your State as a varialbe
    const name = useSelector<ShipState>(state => state.name)

    const classification = useSelector<ShipState>(state => state.classification)

    const { register, handleSubmit } = useForm({ })

    const onSubmit = async (data:any, event:any) => {
        console.log(props.id)

        if( props.id!){
            await serverCalls.update(props.id!, data)
            console.log(`Updated: ${data.name} \nID: ${props.id}`)
            window.location.reload();
            event.target.reset();
        } else {
            dispatch(chooseName(data.name))
            dispatch(chooseClassification(data.classification))
            dispatch(chooseDescription(data.description))
            dispatch(chooseEngine(data.engine))
            dispatch(chooseSpeed(data.max_speed))
            dispatch(chooseRange(data.range))
            dispatch(chooseShield(data.shield))
            dispatch(chooseSize(data.size))
            dispatch(chooseWeapons(data.weapons))

            await serverCalls.create(store.getState())
            console.log(`Updated:${data} ${props.id}`)
            window.location.reload();
            event.target.reset();

        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Ship Name</label>
                    <Input {...register('name')} name="name" placeholder='Name' />
                </div>
                <div>
                    <label htmlFor="classification">Classification</label>
                    <Input {...register('classification')} name="classification" placeholder="G-Wagon"/>
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <Input {...register('description')} name="description" placeholder="IT FLYS!!!!"/>
                </div>
                <div>
                    <label htmlFor="engine">Engine</label>
                    <Input {...register('engine')} name="engine" placeholder="66 Cylinders"/>
                </div>
                <div>
                    <label htmlFor="max_speed">Speed</label>
                    <Input {...register('max_speed')} name="max_speed" placeholder="Faster Than Paint Pealing"/>
                </div>
                <div>
                    <label htmlFor="range">Range</label>
                    <Input {...register('range')} name="range" placeholder='This Dimension?'/>
                </div>
                <div>
                    <label htmlFor="shield">Shield</label>
                    <Input {...register('shield')} name="shield" placeholder="Everywhere?"/>
                </div>
                <div>
                    <label htmlFor="size">Size</label>
                    <Input {...register('size')} name="size" placeholder=" As big as a..."/>
                </div>
                <div>
                    <label htmlFor="weapons">Weapons</label>
                    <Input {...register('weapons')} name="weapons" placeholder="The ones that bring peace."/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}