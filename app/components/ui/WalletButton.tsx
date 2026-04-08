import { memo, useMemo } from 'react';
import { Wallet } from '@mercadopago/sdk-react';

const WalletButton = memo(function WalletButton({ preferenceId }: { preferenceId: string }) {
    const initialization = useMemo(() => ({ preferenceId }), [preferenceId]);

    return <Wallet initialization={initialization} />;
});

export default WalletButton;