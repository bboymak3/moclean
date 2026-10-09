"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { COMUNAS } from "@/lib/comunas-data";
import { openWhatsApp } from "@/lib/whatsapp";

const TIPOS = [
  "Pre mudanza (entrega de depto o casa)",
  "Post mudanza (antes de instalarse)",
  "Post obra o remodelación",
  "Inmueble en mal estado",
  "Limpieza profunda general",
];

const EMPTY = { nombre: "", telefono: "", correo: "", comuna: "", tipo: "", metros: "", mensaje: "" };

/**
 * Formulario "Cotiza tu servicio aquí".
 * El sitio no tiene backend: al enviar, abre WhatsApp con los datos ya escritos
 * para que la solicitud llegue de verdad al +56 9 4034 9957.
 */
export function QuoteForm() {
  const [data, setData] = useState(EMPTY);
  const set = (field: keyof typeof EMPTY) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setData({ ...data, [field]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openWhatsApp([
      "Hola Limpieza24/7, quiero cotizar una limpieza profunda detallada.",
      `Nombre: ${data.nombre}`,
      `Teléfono: ${data.telefono}`,
      data.correo && `Correo: ${data.correo}`,
      `Comuna: ${data.comuna}`,
      data.tipo && `Tipo de limpieza: ${data.tipo}`,
      data.metros && `Metros cuadrados aprox.: ${data.metros}`,
      data.mensaje && `Mensaje: ${data.mensaje}`,
    ]);
  };

  const selectClass =
    "mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="qf-nombre" className="text-gray-700 text-sm">Nombre</Label>
          <Input id="qf-nombre" placeholder="Tu nombre" required value={data.nombre} onChange={set("nombre")} className="mt-1" />
        </div>
        <div>
          <Label htmlFor="qf-telefono" className="text-gray-700 text-sm">Teléfono</Label>
          <Input id="qf-telefono" type="tel" placeholder="9 1234 5678" required value={data.telefono} onChange={set("telefono")} className="mt-1" />
        </div>
      </div>
      <div>
        <Label htmlFor="qf-correo" className="text-gray-700 text-sm">Correo (opcional)</Label>
        <Input id="qf-correo" type="email" placeholder="tu@correo.com" value={data.correo} onChange={set("correo")} className="mt-1" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="qf-comuna" className="text-gray-700 text-sm">Comuna</Label>
          <select id="qf-comuna" required value={data.comuna} onChange={set("comuna")} className={selectClass}>
            <option value="">Selecciona tu comuna...</option>
            {COMUNAS.map((c) => (
              <option key={c.slug} value={c.name}>{c.name}</option>
            ))}
          </select>
        </div>
        <div>
          <Label htmlFor="qf-metros" className="text-gray-700 text-sm">Metros cuadrados aprox.</Label>
          <Input id="qf-metros" inputMode="numeric" placeholder="Ej: 65" value={data.metros} onChange={set("metros")} className="mt-1" />
        </div>
      </div>
      <div>
        <Label htmlFor="qf-tipo" className="text-gray-700 text-sm">Tipo de limpieza</Label>
        <select id="qf-tipo" value={data.tipo} onChange={set("tipo")} className={selectClass}>
          <option value="">Selecciona una opción...</option>
          {TIPOS.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>
      <div>
        <Label htmlFor="qf-mensaje" className="text-gray-700 text-sm">Mensaje</Label>
        <Textarea id="qf-mensaje" rows={3} placeholder="Cuéntanos el estado del inmueble, fechas, etc." value={data.mensaje} onChange={set("mensaje")} className="mt-1" />
      </div>
      <Button type="submit" size="lg" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold">
        <Send className="w-4 h-4 mr-2" />
        Enviar cotización por WhatsApp
      </Button>
      <p className="text-center text-xs text-gray-500">
        Se abrirá WhatsApp con tus datos listos para enviar. Puedes adjuntar fotos del inmueble para una cotización más precisa.
      </p>
    </form>
  );
}
