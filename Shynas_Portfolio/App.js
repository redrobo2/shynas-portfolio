
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Bug, ShieldCheck, TerminalSquare } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Portfolio() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Red Team Specialist | Bug Bounty Hunter | Cyber Security Specialist | Pentester";

  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.id = "matrix-bg";
    document.body.prepend(canvas);
    const ctx = canvas.getContext("2d");

    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.zIndex = "-1";
    canvas.style.pointerEvents = "none";

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const columns = Math.floor(canvas.width / 20);
    const drops = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#0F0";
      ctx.font = "16px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = String.fromCharCode(0x30a0 + Math.random() * 96);
        ctx.fillText(text, i * 20, drops[i] * 20);

        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 66); // Slowed down from 33ms to 66ms
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      setTypedText((prev) => prev + fullText.charAt(i));
      i++;
      if (i === fullText.length) clearInterval(typingInterval);
    }, 50);
    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      body::after {
        content: "";
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url('https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif') repeat;
        opacity: 0.02;
        z-index: -1;
        pointer-events: none;
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <main className="min-h-screen bg-black text-red-500 p-4 font-mono">
      <section className="text-center py-10">
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="text-4xl md:text-6xl font-bold text-[#00FF00]">
          Shynas N S
        </motion.h1>
        <p className="text-xl mt-4 text-red-500">
          {typedText}
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-6 py-10">
        <Card className="bg-zinc-900 border-zinc-700">
          <CardContent className="p-6 text-red-500">
            <h2 className="text-2xl text-green-300 mb-2">About Me</h2>
            <p>
              I'm a passionate cybersecurity professional with experience in red teaming, penetration testing, and bug hunting. I hold certifications like CEH, CHFI, CSA, and more. I specialize in vulnerability assessments, exploit development, and offensive security operations.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-zinc-700">
          <CardContent className="p-6 text-red-500">
            <h2 className="text-2xl text-green-300 mb-2">Courses & Certifications</h2>
            <ul className="list-disc list-inside">
              <li>Certified Ethical Hacker (CEH)</li>
              <li>Computer Hacking Forensic Investigator (CHFI)</li>
              <li>Certified SOC Analyst (CSA)</li>
              <li>Cyber Threat Management - Cisco</li>
              <li>Advanced Diploma in Cybersecurity – TechByHeart Academy</li>
              <li>BCA – Yenepoya University</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="col-span-full bg-zinc-900 border-zinc-700">
          <CardContent className="p-6 text-red-500">
            <h2 className="text-2xl text-green-300 mb-2">Projects & Exploit Labs</h2>
            <ul className="space-y-2">
              <li>
                <strong>LFI to RCE Exploit Chain –</strong> Discovered LFI, unrestricted file upload, reverse shell access, and post-exploitation in lab environment.
              </li>
              <li>
                <strong>Bug Bounty Reports –</strong> XSS, IDOR, SQLi, and more vulnerabilities responsibly disclosed across platforms.
              </li>
              <li>
                <strong>Smart Mirror Red Team Project –</strong> Converted a smart IoT mirror into a full red team simulation platform.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="col-span-full bg-zinc-900 border-zinc-700">
          <CardContent className="p-6 text-red-500">
            <h2 className="text-2xl text-green-300 mb-2">Connect With Me</h2>
            <div className="flex flex-wrap gap-4 text-green-400">
              <a href="mailto:shynasns@gmail.com" className="flex items-center gap-2"><Mail size={18}/> Email</a>
              <a href="https://www.linkedin.com/in/shynasns" target="_blank" className="flex items-center gap-2"><Linkedin size={18}/> LinkedIn</a>
              <a href="https://www.hackthebox.com/profile/114848" target="_blank" className="flex items-center gap-2"><ShieldCheck size={18}/> Hack The Box</a>
              <a href="https://tryhackme.com/p/shynasns" target="_blank" className="flex items-center gap-2"><TerminalSquare size={18}/> TryHackMe</a>
              <a href="https://bugcrowd.com/shynasns" target="_blank" className="flex items-center gap-2"><Bug size={18}/> Bugcrowd</a>
              <a href="https://hackerone.com/shynasns" target="_blank" className="flex items-center gap-2"><Bug size={18}/> HackerOne</a>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-full bg-zinc-900 border-zinc-700 text-center">
          <CardContent className="p-6">
            <h2 className="text-2xl text-green-300 mb-2">Download My Resume</h2>
            <a href="/resume.pdf" download>
              <Button variant="outline" className="text-green-300 border-green-300 hover:bg-green-800">
                Download Resume
              </Button>
            </a>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
