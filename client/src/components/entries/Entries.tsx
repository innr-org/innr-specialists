import * as React from 'react'
// @ts-ignore
import cl from './Entries.module.css'

import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table'
import {useEffect} from "react";

type Person = {
    id: string
    date: string
    time: string
    type: string
    fullName: string
    city: string
    number: string
    notes: string
}

const defaultData: Person[] = [
    {
        id: '123457890',
        date: 'Июнь 8, 2023',
        time: "8:00",
        type: "Онлайн",
        fullName: 'Ахметова Адинаp',
        city: "Астана",
        number: "+7 777 777 77 77",
        notes: "мне удобно на казахском, сухая кожа, акне"
    },
    {
        id: '123457890',
        date: 'Июнь 8, 2023',
        time: "10:30",
        type: "Оффлайн",
        fullName: 'Ахметова Адина',
        city: "Астана",
        number: "+7 777 777 77 77",
        notes: "мне удобно на казахском, сухая кожа, акне"
    },
    {
        id: '123457890',
        date: 'Июнь 8, 2023',
        time: "12:00",
        type: "Онлайн",
        fullName: 'Ахметова Адина',
        city: "Астана",
        number: "+7 777 777 77 77",
        notes: "мне удобно на казахском, сухая кожа, акне"
    },
    {
        id: '123457890',
        date: 'Июнь 8, 2023',
        time: "13:00",
        type: "Онлайн",
        fullName: 'Ахметова Адинаp',
        city: "Астана",
        number: "+7 777 777 77 77",
        notes: "мне удобно на казахском, сухая кожа, акне"
    },
    {
        id: '123457890',
        date: 'Июнь 8, 2023',
        time: "15:00",
        type: "Оффлайн",
        fullName: 'Ахметова Адина',
        city: "Астана",
        number: "+7 777 777 77 77",
        notes: "мне удобно на казахском, сухая кожа, акне"
    },
    {
        id: '123457890',
        date: 'Июнь 8, 2023',
        time: "19:00",
        type: "Онлайн",
        fullName: 'Ахметова Адина',
        city: "Астана",
        number: "+7 777 777 77 77",
        notes: "мне удобно на казахском, сухая кожа, акне"
    },
    {
        id: '123457890',
        date: 'Июнь 9, 2023',
        time: "9:00",
        type: "Онлайн",
        fullName: 'Ахметова Адинаp',
        city: "Астана",
        number: "+7 777 777 77 77",
        notes: "мне удобно на казахском, сухая кожа, акне"
    },
    {
        id: '123457890',
        date: 'Июнь 9, 2023',
        time: "10:00",
        type: "Оффлайн",
        fullName: 'Ахметова Адина',
        city: "Астана",
        number: "+7 777 777 77 77",
        notes: "мне удобно на казахском, сухая кожа, акне"
    },
    {
        id: '123457890',
        date: 'Июнь 10, 2023',
        time: "10:00",
        type: "Онлайн",
        fullName: 'Ахметова Адина',
        city: "Астана",
        number: "+7 777 777 77 77",
        notes: "мне удобно на казахском, сухая кожа, акне"
    },
]

const oldData: Person[] = [
    {
        id: '123457890',
        date: 'Май 30, 2023',
        time: "10:00",
        type: "Онлайн",
        fullName: 'Ахметова Адинаp',
        city: "Астана",
        number: "+7 777 777 77 77",
        notes: "мне удобно на казахском, сухая кожа, акне"
    },
    {
        id: '123457890',
        date: 'Май 30, 2023',
        time: "15:00",
        type: "Оффлайн",
        fullName: 'Ахметова Адина',
        city: "Астана",
        number: "+7 777 777 77 77",
        notes: "мне удобно на казахском, сухая кожа, акне"
    },
    {
        id: '123457890',
        date: 'Май 30, 2023',
        time: "17:00",
        type: "Онлайн",
        fullName: 'Ахметова Адина',
        city: "Астана",
        number: "+7 777 777 77 77",
        notes: "мне удобно на казахском, сухая кожа, акне"
    },
    {
        id: '123457890',
        date: 'Май 30, 2023',
        time: "18:00",
        type: "Онлайн",
        fullName: 'Ахметова Адинаp',
        city: "Астана",
        number: "+7 777 777 77 77",
        notes: "мне удобно на казахском, сухая кожа, акне"
    },
    {
        id: '123457890',
        date: 'Июнь 5, 2023',
        time: "10:00",
        type: "Оффлайн",
        fullName: 'Ахметова Адина',
        city: "Астана",
        number: "+7 777 777 77 77",
        notes: "мне удобно на казахском, сухая кожа, акне"
    },
    {
        id: '123457890',
        date: 'Июнь 5, 2023',
        time: "12:00",
        type: "Онлайн",
        fullName: 'Ахметова Адина',
        city: "Астана",
        number: "+7 777 777 77 77",
        notes: "мне удобно на казахском, сухая кожа, акне"
    },
]

const allData: Person[] = [
    {
        id: '123457890',
        date: 'Июнь 8, 2023',
        time: "8:00",
        type: "Онлайн",
        fullName: 'Ахметова Адинаp',
        city: "Астана",
        number: "+7 777 777 77 77",
        notes: "мне удобно на казахском, сухая кожа, акне"
    },
    {
        id: '123457890',
        date: 'Июнь 8, 2023',
        time: "10:30",
        type: "Оффлайн",
        fullName: 'Ахметова Адина',
        city: "Астана",
        number: "+7 777 777 77 77",
        notes: "мне удобно на казахском, сухая кожа, акне"
    },
    {
        id: '123457890',
        date: 'Июнь 8, 2023',
        time: "12:00",
        type: "Онлайн",
        fullName: 'Ахметова Адина',
        city: "Астана",
        number: "+7 777 777 77 77",
        notes: "мне удобно на казахском, сухая кожа, акне"
    },
    {
        id: '123457890',
        date: 'Июнь 8, 2023',
        time: "13:00",
        type: "Онлайн",
        fullName: 'Ахметова Адинаp',
        city: "Астана",
        number: "+7 777 777 77 77",
        notes: "мне удобно на казахском, сухая кожа, акне"
    },
    {
        id: '123457890',
        date: 'Июнь 8, 2023',
        time: "15:00",
        type: "Оффлайн",
        fullName: 'Ахметова Адина',
        city: "Астана",
        number: "+7 777 777 77 77",
        notes: "мне удобно на казахском, сухая кожа, акне"
    },
    {
        id: '123457890',
        date: 'Июнь 8, 2023',
        time: "19:00",
        type: "Онлайн",
        fullName: 'Ахметова Адина',
        city: "Астана",
        number: "+7 777 777 77 77",
        notes: "мне удобно на казахском, сухая кожа, акне"
    },
    {
        id: '123457890',
        date: 'Июнь 9, 2023',
        time: "9:00",
        type: "Онлайн",
        fullName: 'Ахметова Адинаp',
        city: "Астана",
        number: "+7 777 777 77 77",
        notes: "мне удобно на казахском, сухая кожа, акне"
    },
    {
        id: '123457890',
        date: 'Июнь 9, 2023',
        time: "10:00",
        type: "Оффлайн",
        fullName: 'Ахметова Адина',
        city: "Астана",
        number: "+7 777 777 77 77",
        notes: "мне удобно на казахском, сухая кожа, акне"
    },
    {
        id: '123457890',
        date: 'Июнь 10, 2023',
        time: "10:00",
        type: "Онлайн",
        fullName: 'Ахметова Адина',
        city: "Астана",
        number: "+7 777 777 77 77",
        notes: "мне удобно на казахском, сухая кожа, акне"
    },
    {
        id: '123457890',
        date: 'Май 30, 2023',
        time: "10:00",
        type: "Онлайн",
        fullName: 'Ахметова Адинаp',
        city: "Астана",
        number: "+7 777 777 77 77",
        notes: "мне удобно на казахском, сухая кожа, акне"
    },
    {
        id: '123457890',
        date: 'Май 30, 2023',
        time: "15:00",
        type: "Оффлайн",
        fullName: 'Ахметова Адина',
        city: "Астана",
        number: "+7 777 777 77 77",
        notes: "мне удобно на казахском, сухая кожа, акне"
    },
    {
        id: '123457890',
        date: 'Май 30, 2023',
        time: "17:00",
        type: "Онлайн",
        fullName: 'Ахметова Адина',
        city: "Астана",
        number: "+7 777 777 77 77",
        notes: "мне удобно на казахском, сухая кожа, акне"
    },
    {
        id: '123457890',
        date: 'Май 30, 2023',
        time: "18:00",
        type: "Онлайн",
        fullName: 'Ахметова Адинаp',
        city: "Астана",
        number: "+7 777 777 77 77",
        notes: "мне удобно на казахском, сухая кожа, акне"
    },
    {
        id: '123457890',
        date: 'Июнь 5, 2023',
        time: "10:00",
        type: "Оффлайн",
        fullName: 'Ахметова Адина',
        city: "Астана",
        number: "+7 777 777 77 77",
        notes: "мне удобно на казахском, сухая кожа, акне"
    },
    {
        id: '123457890',
        date: 'Июнь 5, 2023',
        time: "12:00",
        type: "Онлайн",
        fullName: 'Ахметова Адина',
        city: "Астана",
        number: "+7 777 777 77 77",
        notes: "мне удобно на казахском, сухая кожа, акне"
    },
]

const columnHelper = createColumnHelper<Person>()

const columns = [
    columnHelper.accessor('id', {
        footer: info => info.column.id,
    }),
    columnHelper.accessor('date', {
        header: () => <span>Дата</span>,
    }),
    columnHelper.accessor('time', {
        header: () => <span>Время</span>,
    }),
    columnHelper.accessor('type', {
        header: () => <span>Тип приема</span>,
    }),
    columnHelper.accessor('fullName', {
        header: () => <span>ФИО</span>,
    }),
    columnHelper.accessor('city', {
        header: () => <span>Город</span>,
    }),
    columnHelper.accessor('number', {
        header: () => <span>Номер телефона</span>,
    }),
    columnHelper.accessor('notes', {
        header: () => <span>Комментарии</span>,
    }),
]

function Entries({type, selectedDate}) {
    const [data, setData] = React.useState(() => defaultData.filter(data => data.date==selectedDate))
      useEffect(() => {
        // console.log(data)
        // console.log(selectedDate)
        // console.log(data[0]?.date)
        if(type==="upcoming"){
            setData(defaultData.filter(data => data.date==selectedDate))
        }
        else if(type==="old"){
            setData(oldData.filter(data => data.date==selectedDate))
        }
        else if(type==="all"){
            setData(allData.filter(data => data.date))
        }
    }, [selectedDate, type])
    const rerender = React.useReducer(() => ({}), {})[1]

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })



    return (
        <div className={cl.entries}>
            <table className={cl.table}>
                <thead className={cl.thead}>
                {table.getHeaderGroups().map(headerGroup => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map(header => (
                            <th key={header.id} className={cl.th}>
                                {header.isPlaceholder
                                    ? null
                                    : flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                            </th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody className={cl.tbody}>
                {table.getRowModel().rows.map(row => (
                    <tr key={row.id}>
                        {row.getVisibleCells().map(cell => (
                            <td key={cell.id}>
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default Entries;
