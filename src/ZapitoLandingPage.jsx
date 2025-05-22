import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Zap, Smartphone, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function ZapitoLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white text-gray-900">
      <section className="max-w-5xl mx-auto px-4 py-20 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Controle suas finanças com o <span className="text-green-600">Zapito</span>
        </motion.h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Um assistente financeiro direto no WhatsApp. Fácil, rápido e gratuito.
        </p>
        <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg">
          Comece Agora – É grátis!
        </Button>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <Smartphone className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">100% pelo WhatsApp</h3>
              <p className="text-gray-600">Sem apps extras. Basta chamar o Zapito no seu zap!</p>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardContent className="p-6">
              <MessageSquare className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Relatórios e alertas</h3>
              <p className="text-gray-600">Receba insights e avisos personalizados dos seus gastos.</p>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardContent className="p-6">
              <Zap className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Rápido e Inteligente</h3>
              <p className="text-gray-600">Zapito aprende com seus hábitos para te ajudar melhor a cada dia.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="text-center py-20 bg-green-50">
        <h2 className="text-3xl font-bold mb-4">Pronto para organizar sua vida financeira?</h2>
        <p className="text-gray-700 text-lg mb-6">
          Fale com o Zapito agora e tenha controle total sem sair do WhatsApp.
        </p>
        <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg">
          Comece pelo WhatsApp
        </Button>
      </section>
    </div>
  );
}
