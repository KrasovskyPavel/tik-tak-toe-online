import {prisma} from '@/shared/lib/db';
import {Card, CardTitle} from '@/shared/ui/card';

export default async function Home() {
    const games = await prisma.game.findMany();

    console.log('games', games);

    return (
        <div className="">
            {games.map((game) => {
                return (
                    <Card key={game.id}>
                        <CardTitle>{game.name}</CardTitle>
                    </Card>
                );
            })}
        </div>
    );
}
