#!/usr/bin/env -S deno run --allow-all --unstable

import { fromFileUrl , dirname , join  } 
from 'https://deno.land/std@0.144.0/path/mod.ts';

const { clear , log } = console;
const { run , env } = Deno;


clear();


const 
    home = env.get('HOME'),
    deno = join(home,'.deno','bin','deno');

log('\n','Using Deno from:','\n',deno,'\n');


const
    location = dirname(fromFileUrl(import.meta.url)),
    app = join(location,'..','..','..','Editor','Source','App.js');

log('\n','Starting editor from:','\n',app,'\n');


const permissions = [];


const process = run({
    stdout : 'inherit' ,
    stderr : 'inherit' ,
    stdin  : 'inherit' ,
    cmd    : [ deno , 'run' , ...permissions , app ]
});

await process.status();
