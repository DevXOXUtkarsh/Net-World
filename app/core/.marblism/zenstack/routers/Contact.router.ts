/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@zenstackhq/runtime/models';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.ContactInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).contact.createMany(input as any))),

        create: procedure.input($Schema.ContactInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).contact.create(input as any))),

        deleteMany: procedure.input($Schema.ContactInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).contact.deleteMany(input as any))),

        delete: procedure.input($Schema.ContactInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).contact.delete(input as any))),

        findFirst: procedure.input($Schema.ContactInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).contact.findFirst(input as any))),

        findMany: procedure.input($Schema.ContactInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).contact.findMany(input as any))),

        findUnique: procedure.input($Schema.ContactInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).contact.findUnique(input as any))),

        updateMany: procedure.input($Schema.ContactInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).contact.updateMany(input as any))),

        update: procedure.input($Schema.ContactInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).contact.update(input as any))),

        count: procedure.input($Schema.ContactInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).contact.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.ContactCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ContactCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ContactCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ContactCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.ContactCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ContactCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ContactGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ContactGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ContactCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ContactCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ContactGetPayload<T>, Context>) => Promise<Prisma.ContactGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.ContactDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ContactDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ContactDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ContactDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.ContactDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ContactDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ContactGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ContactGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ContactDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ContactDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ContactGetPayload<T>, Context>) => Promise<Prisma.ContactGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.ContactFindFirstArgs, TData = Prisma.ContactGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.ContactFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ContactGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ContactFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.ContactFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ContactGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ContactGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.ContactFindManyArgs, TData = Array<Prisma.ContactGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.ContactFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.ContactGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ContactFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.ContactFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.ContactGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.ContactGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.ContactFindUniqueArgs, TData = Prisma.ContactGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ContactFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ContactGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ContactFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ContactFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ContactGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ContactGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.ContactUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ContactUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ContactUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ContactUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.ContactUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ContactUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ContactGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ContactGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ContactUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ContactUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ContactGetPayload<T>, Context>) => Promise<Prisma.ContactGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.ContactCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.ContactCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.ContactCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.ContactCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.ContactCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.ContactCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.ContactCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.ContactCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
