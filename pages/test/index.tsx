import React from 'react';

import Card from '@/src/components/ui/Card';
import Chips from '@/src/components/ui/Chips/Chips';

export default function Page() {
	return (
		<div className='flex flex-col gap-6 bg-gray2 p-1'>
			<MemberTable />
			<InvitelistTable />
			<InvitedashTable />
			<Chips />
			<Card />
		</div>
	);
}
