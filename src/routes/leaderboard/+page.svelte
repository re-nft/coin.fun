<script lang="ts">
  import * as Table from '$lib/components/ui/table/index.js';

  const invoices = [
    {
      invoice: 'Cobie',
      paymentStatus: '1/1/2024',
      totalAmount: '10000',
      paymentMethod: '100'
    },
    {
      invoice: 'Vectorized',
      paymentStatus: '1/1/2024',
      totalAmount: '9900',
      paymentMethod: '99'
    },
    {
      invoice: 'bantg',
      paymentStatus: '1/2/2024',
      totalAmount: '9800',
      paymentMethod: '98'
    },
    {
      invoice: 'vitalikbuterin',
      paymentStatus: '2/3/2024',
      totalAmount: '8300',
      paymentMethod: '83'
    },
    {
      invoice: 'wishfulcynic',
      paymentStatus: '3/4/2024',
      totalAmount: '3200',
      paymentMethod: '32'
    },
    {
      invoice: 'sassano',
      paymentStatus: '3/5/2024',
      totalAmount: '400',
      paymentMethod: '4'
    },
    {
      invoice: 'eloonmoosk',
      paymentStatus: '1/10/2024',
      totalAmount: '100',
      paymentMethod: '1'
    }
  ];
</script>

<Table.Root>
  <Table.Caption>A list of your recent invoices.</Table.Caption>
  <Table.Header>
    <Table.Row>
      <Table.Head class="w-[100px]">Username</Table.Head>
      <Table.Head>Joined</Table.Head>
      <Table.Head># of Referrals</Table.Head>
      <Table.Head class="text-right">Potential Points</Table.Head>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    {#each invoices as invoice, i (i)}
      <Table.Row>
        <Table.Cell class="font-medium">{invoice.invoice}</Table.Cell>
        <Table.Cell>{invoice.paymentStatus}</Table.Cell>
        <Table.Cell>{invoice.paymentMethod}</Table.Cell>
        <Table.Cell class="text-right">{invoice.totalAmount}</Table.Cell>
      </Table.Row>
    {/each}
  </Table.Body>
</Table.Root>
