import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface EmailData {
  nome: string;
  email: string;
  empresa: string;
  mensagem: string;
}

export async function POST(request: Request) {
  try {
    const { nome, email, empresa, mensagem }: EmailData = await request.json();

    // Validação básica dos campos
    if (!nome || !email || !empresa || !mensagem) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      );
    }

    // Configuração do transporter do nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Configuração do email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `Nova proposta de parceria - ${empresa}`,
      html: `
        <h2>Nova proposta de parceria recebida</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Empresa:</strong> ${empresa}</p>
        <p><strong>Mensagem:</strong> ${mensagem}</p>
      `,
    };

    // Envio do email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Proposta enviada com sucesso!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erro ao processar a proposta:', error);
    return NextResponse.json(
      { error: 'Erro ao processar a proposta' },
      { status: 500 }
    );
  }
} 