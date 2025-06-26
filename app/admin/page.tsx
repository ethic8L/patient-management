import {DataTable} from '@/components/table/DataTable'
import StatCard from '@/components/StatCard'
import { getRecentAppointmentList } from '@/lib/actions/appointment.actions'
import Link from 'next/link'
import React from 'react'
import {columns, Payment} from '@/components/table/columns'



const Admin = async () => {
  const appointments = await getRecentAppointmentList();

  return (
    <div className='mx-auto flex max-w-7xl flex-col space-y-14'>
        <header className='admin-header'>
            <Link href='/' className='cursor-pointer'>
                <p className='h-8 w-fit'>Strona początkowa</p>
            </Link>

            <p className='text-16-semibold'>Panel administratora</p>
        </header>

        <main className='admin-main'>
            <section className='w-full space-y-4'> 
                <h1 className='header'>Witaj 👋</h1>
                <p className='text-dark-700'>Zarządzaj użytkownikami, przeglądaj statystyki.</p>
            </section>

            <section className='admin-stat'>
                <StatCard
                    type='appointments'
                    count={appointments.scheduledCount}
                    label='Scheduled appointments'
                    icon='/assets/icons/appointments.svg'
                />
                <StatCard
                    type='pending'
                    count={appointments.pendingCount}
                    label='Pending appointments'
                    icon='/assets/icons/pending.svg'
                />
                <StatCard
                    type='cancelled'
                    count={appointments.cancelledCount}
                    label='Cancelled appointments'
                    icon='/assets/icons/cancelled.svg'
                />
            </section>

            <DataTable columns={columns} data={appointments.documents} />
        </main>
    </div>
  )
}

export default Admin