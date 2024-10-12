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

        createMany: procedure.input($Schema.ConversationParticipantInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).conversationParticipant.createMany(input as any))),

        create: procedure.input($Schema.ConversationParticipantInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).conversationParticipant.create(input as any))),

        deleteMany: procedure.input($Schema.ConversationParticipantInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).conversationParticipant.deleteMany(input as any))),

        delete: procedure.input($Schema.ConversationParticipantInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).conversationParticipant.delete(input as any))),

        findFirst: procedure.input($Schema.ConversationParticipantInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).conversationParticipant.findFirst(input as any))),

        findMany: procedure.input($Schema.ConversationParticipantInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).conversationParticipant.findMany(input as any))),

        findUnique: procedure.input($Schema.ConversationParticipantInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).conversationParticipant.findUnique(input as any))),

        updateMany: procedure.input($Schema.ConversationParticipantInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).conversationParticipant.updateMany(input as any))),

        update: procedure.input($Schema.ConversationParticipantInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).conversationParticipant.update(input as any))),

        count: procedure.input($Schema.ConversationParticipantInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).conversationParticipant.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.ConversationParticipantCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ConversationParticipantCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ConversationParticipantCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ConversationParticipantCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.ConversationParticipantCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ConversationParticipantCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ConversationParticipantGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ConversationParticipantGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ConversationParticipantCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ConversationParticipantCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ConversationParticipantGetPayload<T>, Context>) => Promise<Prisma.ConversationParticipantGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.ConversationParticipantDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ConversationParticipantDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ConversationParticipantDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ConversationParticipantDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.ConversationParticipantDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ConversationParticipantDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ConversationParticipantGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ConversationParticipantGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ConversationParticipantDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ConversationParticipantDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ConversationParticipantGetPayload<T>, Context>) => Promise<Prisma.ConversationParticipantGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.ConversationParticipantFindFirstArgs, TData = Prisma.ConversationParticipantGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.ConversationParticipantFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ConversationParticipantGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ConversationParticipantFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.ConversationParticipantFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ConversationParticipantGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ConversationParticipantGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.ConversationParticipantFindManyArgs, TData = Array<Prisma.ConversationParticipantGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.ConversationParticipantFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.ConversationParticipantGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ConversationParticipantFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.ConversationParticipantFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.ConversationParticipantGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.ConversationParticipantGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.ConversationParticipantFindUniqueArgs, TData = Prisma.ConversationParticipantGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ConversationParticipantFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ConversationParticipantGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ConversationParticipantFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ConversationParticipantFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ConversationParticipantGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ConversationParticipantGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.ConversationParticipantUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ConversationParticipantUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ConversationParticipantUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ConversationParticipantUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.ConversationParticipantUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ConversationParticipantUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ConversationParticipantGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ConversationParticipantGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ConversationParticipantUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ConversationParticipantUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ConversationParticipantGetPayload<T>, Context>) => Promise<Prisma.ConversationParticipantGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.ConversationParticipantCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.ConversationParticipantCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.ConversationParticipantCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.ConversationParticipantCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.ConversationParticipantCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.ConversationParticipantCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.ConversationParticipantCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.ConversationParticipantCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
