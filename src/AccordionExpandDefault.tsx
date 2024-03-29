import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionExpandDefault() {
  return (
    <div style={{ padding: '20px 30px', height: '1000px' }}>
      <Accordion style={{ marginTop: '0px', marginBottom: '4px' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1-content'
          id='panel1-header'
        >
          <Typography>
            <div>
              <span
                style={{
                  fontWeight: 'bold',
                  textAlign: 'left',
                  display: 'block',
                }}
              >
                2024/03/02
              </span>
              <p style={{ margin: '0' }}>アンケートのお願い</p>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ textAlign: 'left' }}>
            本日はご参加いただきありがとうございます。指示がありましたら、こちらの
            <a
              href='https://docs.google.com/forms/d/e/1FAIpQLSfbgDF44y9zVPvXICUdkYW6owaf8qvpcuEOpQXo8xBxUd3gyA/viewform?usp=sharing'
              target='_blank'
              rel='noreferrer'
            >
              デモアンケート
            </a>
            へのご協力をお願いします。
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ marginTop: '0px', marginBottom: '4px' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1-content'
          id='panel1-header'
        >
          <Typography>
            <div>
              <span
                style={{
                  fontWeight: 'bold',
                  textAlign: 'left',
                  display: 'block',
                }}
              >
                2024/02/11
              </span>
              <p style={{ margin: '0' }}>アップデートのお知らせ</p>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ textAlign: 'left' }}>
            デモ開発用のアップデートを行いました。
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ marginTop: '0px', marginBottom: '4px' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1-content'
          id='panel1-header'
        >
          <Typography>
            <div>
              <span
                style={{
                  fontWeight: 'bold',
                  textAlign: 'left',
                  display: 'block',
                }}
              >
                2024/02/11
              </span>
              <p style={{ margin: '0' }}>アップデートのお知らせ</p>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ textAlign: 'left' }}>
            デモ開発用のアップデートを行いました。
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ marginTop: '0px', marginBottom: '4px' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1-content'
          id='panel1-header'
        >
          <Typography>
            <div>
              <span
                style={{
                  fontWeight: 'bold',
                  textAlign: 'left',
                  display: 'block',
                }}
              >
                2024/02/11
              </span>
              <p style={{ margin: '0' }}>アップデートのお知らせ</p>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ textAlign: 'left' }}>
            デモ開発用のアップデートを行いました。
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ marginTop: '0px', marginBottom: '4px' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1-content'
          id='panel1-header'
        >
          <Typography>
            <div>
              <span
                style={{
                  fontWeight: 'bold',
                  textAlign: 'left',
                  display: 'block',
                }}
              >
                2024/02/11
              </span>
              <p style={{ margin: '0' }}>アップデートのお知らせ</p>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ textAlign: 'left' }}>
            デモ開発用のアップデートを行いました。
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
