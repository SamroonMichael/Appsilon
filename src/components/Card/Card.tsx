import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import { Grid } from '@mui/material';

interface CardDetails {
    amount: string;
    progress_policy: number;
    progress_claim: number;
}

const CardBox = ({ amount, progress_policy, progress_claim }: CardDetails) => {
    return (
        <Box>
            <Card>
                <CardContent>
                    <Box sx={{ marginBottom: '2rem' }}>
                        <Typography variant="h4">
                            {amount}
                            <Box component="span" sx={{ color: '#713BDB', fontSize: '18px', position: 'absolute' }}>
                                $
                            </Box>
                        </Typography>
                        <Typography variant="body1">Total Value of Disbursement</Typography>
                    </Box>
                    <Box sx={{ marginBottom: '2rem' }}>
                        <Grid container>
                            <Grid item xs={10}>
                                <Typography variant="body1">Policy</Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography variant="body1">
                                    400
                                    <Box component="span" sx={{ fontSize: '12px', position: 'absolute' }}>
                                        $
                                    </Box>
                                </Typography>
                            </Grid>
                        </Grid>
                        <LinearProgress variant="determinate" value={progress_policy} />
                    </Box>
                    <Box sx={{ marginBottom: '2rem' }}>
                        <Grid container>
                            <Grid item xs={10}>
                                <Typography variant="body1">Claim</Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography variant="body1">
                                    400
                                    <Box component="span" sx={{ fontSize: '12px', position: 'absolute' }}>
                                        $
                                    </Box>
                                </Typography>
                            </Grid>
                        </Grid>
                        <LinearProgress variant="determinate" value={progress_claim} />
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default CardBox;
