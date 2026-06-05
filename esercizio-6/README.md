# Esercizio 6

Date le ore lavorative giornaliere [40, 35, 45, 38, 42] e una paga base di 15€/ora, calcola lo stipendio totale settimanale applicando una maggiorazione di 5€ per ogni ora straordinaria oltre le 40 giornaliere.

 ## Ragionamento
 - Dichiariamo arry delle ore giornaliere 
 - Dichiariamo variabili fisse che sono costo per ora: 15€ e ore per cui scatta il bonus che è 40.
 - Dichiariamo variabile totale finale per calcolare lo stipedndio settimanale
 - Controlliamo ogni elemento dell'array Finchè non finiscono i giorni(cioè gli elementi dell'array)
   - controlliamo Se ogni giorno ha lavorato 40 o meno ore 
        - moltiplichiamo per 15 le varie ore 
        - aggiungimao alla variabile totale settimanale
    - Se ha lavorato più di 40 ore 
        - calcoliamo le ore in più 
        - moltiplichiamo le 40 ore per 15 e le ore in più per 20(15 di base + 5 per il bonus)
        - sommiamo tutto alla variabile settimanale
- Stampiamo il totale settimanale
