import { Card, Skeleton } from '@mui/material';

export default function PokemonCardSkeleton() {
  return (
    <Card>
      <Skeleton sx={{ height: 250, marginBottom: 0 }} animation='wave' variant='rectangular' />
      <div className='p-2'>
        <Skeleton animation='wave' height={20} width='50%' />
        <Skeleton animation='wave' height={20} style={{ marginBottom: 6 }} />
      </div>
    </Card>
  );
}
